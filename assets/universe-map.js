'use strict';
(() => {
  const stage = document.querySelector('#universe-stage');
  if (!stage || !window.UNIVERSE_MAP_DATA) return;
  const canvas = document.querySelector('#universe-canvas');
  const ctx = canvas.getContext('2d');
  const nodeLayer = document.querySelector('#universe-nodes');
  const showExamples = document.querySelector('#universe-examples');
  const showLines = document.querySelector('#universe-lines');
  const copy = {
    'zh-Hant': {
      intro:'在虛無空間中，探索宇宙之間的連結。',
      reset:'重設視角',
      zero:'零號宇宙',
      four04:'404號宇宙',
      connections:'顯示連線',
      examples:'示意宇宙',
      deltaLegend:'現實偏移量 Δ',
      void:'虛無空間',
      gesture:'拖曳旋轉 · 滾輪／雙指縮放 · 移入／點選宇宙查看',
      selected:'當前宇宙',
      deltaLabel:'現實偏移量',
      recordLabel:'資料狀態',
      readLore:'閱讀宇宙跳躍設定',
      keyboard:'也可用 Tab 選擇宇宙，Enter 查看；聚焦畫面後用方向鍵旋轉，＋／− 縮放。',
      draft:'結構示意：除零號宇宙與404號宇宙外，其他節點的名稱、配色用 Δ 值、空間位置與連線皆為暫定示意。',
      draftName:'示意宇宙',
      draftCode:'DRAFT UNIVERSE',
      known:'已知宇宙',
      baseline:'基準宇宙',
      highRisk:'高危宇宙',
      draftStatus:'示意節點',
      zeroText:'現實偏移量的基準宇宙。其他宇宙的 Δ 值以此為比較基礎。',
      four04Text:'Δ = 7.84，屬高危範圍。更多技術細節請參閱宇宙跳躍設定。',
      draftText:'此節點用於預覽宇宙結構。名稱、位置、連線與配色數值尚未設定為正式世界觀。',
      previewColor:'示意配色值',
      zoomIn:'放大',
      zoomOut:'縮小',
      stageLabel:'可拖曳旋轉的3D宇宙結構圖',
      controls:'宇宙圖控制'},

      en:{
      intro:'Explore the connections between universes in the void.',
      reset:'Reset view',
      zero:'Universe Zero',
      four04:'Universe 404',
      connections:'Connections',
      examples:'Draft universes',
      deltaLegend:'Reality Deviation Δ',
      void:'THE VOID',
      gesture:'Drag to orbit · Scroll / pinch to zoom · Hover or select a universe',
      selected:'SELECTED UNIVERSE',
      deltaLabel:'Reality Deviation',
      recordLabel:'Record status',
      readLore:'Read about Cosmos Leap',
      keyboard:'Tab to a universe and press Enter to select it. With the scene focused, use arrow keys to orbit and + / − to zoom.',
      draft:'Concept view: apart from Universe Zero and Universe 404, node names, color values, positions and connections are illustrative placeholders.',
      draftName:'Draft universe',
      draftCode:'DRAFT UNIVERSE',
      known:'Known universe',
      baseline:'Baseline universe',
      highRisk:'High-risk universe',
      draftStatus:'Draft node',
      zeroText:'The baseline for Reality Deviation. Other universes are measured relative to this universe.',
      four04Text:'Δ = 7.84, in the high-risk range. See Cosmos Leap for the technical setting.',
      draftText:'This node previews the structure. Its name, position, connections, and color value are not established lore.',
      previewColor:'Illustrative color value',
      zoomIn:'Zoom in',
      zoomOut:'Zoom out',
      stageLabel:'Draggable 3D map of parallel universes',
      controls:'Universe map controls'},
    
    ja:{
      intro:'虚無空間で、宇宙同士のつながりを探索する。',
      reset:'視点をリセット',zero:'零号宇宙',four04:'404号宇宙',
      connections:'接続線',
      examples:'仮の宇宙',
      deltaLegend:'現実偏移量 Δ',
      void:'虚無空間',
      gesture:'ドラッグで回転 · スクロール／ピンチで拡縮 · 宇宙に触れて名前を表示',
      selected:'選択中の宇宙',
      eltaLabel:'現実偏移量',
      recordLabel:'データの状態',
      readLore:'宇宙跳躍の設定を読む',
      keyboard:'Tabで宇宙を選び、Enterで表示。画面にフォーカスすると矢印キーで回転、＋／−で拡縮できます。',
      draft:'構造のイメージ：零号宇宙と404号宇宙以外の名前、配色用のΔ値、配置、接続線は仮のものです。',
      draftName:'仮の宇宙',
      draftCode:'DRAFT UNIVERSE',
      known:'既知の宇宙',
      baseline:'基準宇宙',
      highRisk:'高危険宇宙',
      draftStatus:'仮のノード',
      zeroText:'現実偏移量の基準となる宇宙。他の宇宙のΔ値は、この宇宙との比較に基づく。',
      four04Text:'Δ = 7.84で、高危険域に属する。技術の詳細は宇宙跳躍の設定を参照。',
      draftText:'構造のプレビュー用ノード。名前、配置、接続、配色用の数値は正式な世界設定ではありません。',
      previewColor:'配色用の仮の値',
      zoomIn:'拡大',
      zoomOut:'縮小',
      stageLabel:'ドラッグで回転できる3D宇宙構造図',
      controls:'宇宙図の操作'}
  };
  let lang = document.documentElement.lang;
  const text = () => copy[lang] || copy['zh-Hant'];
  const data = window.UNIVERSE_MAP_DATA;
  const records = data.nodes.map((node,index) => ({...node, letter:String.fromCharCode(65+index-2)}));
  let selected = 'zero', hovered = null;
  let yaw = -.16, pitch = .12, zoom = 1, center = [0,0,0];
  let width=0, height=0, renderRequest=0;
  const pointers = new Map();
  let drag = null, pinch = null;
  const clamp = (v,min,max) => Math.min(max,Math.max(min,v));
  const name = node => node.draft ? `${text().draftName} ${node.letter}` : node.name[lang] || node.name['zh-Hant'];
  const delta = node => node.delta ?? node.previewDelta ?? 0;
  const color = node => `hsl(${120 - 12 * clamp(delta(node),0,10)} 30% 60%)`;
  const elements = new Map();
  const visible = node => !node.draft || showExamples.checked;
  function setHovered(id) {
    if (hovered === id) return;
    hovered=id;
    records.forEach(node => elements.get(node.id).classList.toggle('is-hovered',node.id===hovered));
    requestRender();
  }
  function updateSelection() {
    const node=records.find(node=>node.id===selected) || records[0];
    selected=node.id;

const selectedTitle = document.querySelector(
  '#universe-selected-title'
);

selectedTitle.replaceChildren();

if (node.url) {
  const link = document.createElement('a');

  link.href = node.url;
  link.textContent = name(node);
  link.className = 'universe-title-link';

  selectedTitle.append(link);
} else {
  // 尚未設定詳細頁的宇宙，只顯示名稱。
  selectedTitle.textContent = name(node);
}

    document.querySelector('#universe-selected-code').textContent=node.code || `${text().draftCode} ${node.letter}`;
    document.querySelector('#universe-selected-delta').textContent=node.draft ? `— (${text().previewColor} ${delta(node).toFixed(2)})` : `Δ ${node.delta.toFixed(2)}`;
    document.querySelector('#universe-selected-status').textContent=node.draft ? text().draftStatus : node.id==='zero' ? text().baseline : text().highRisk;
    document.querySelector('#universe-selected-description').textContent=node.draft ? text().draftText : node.id==='zero' ? text().zeroText : text().four04Text;
    const dot=document.querySelector('#universe-selected-dot');
    dot.style.background=color(node); dot.style.boxShadow="none";
    for (const item of records) {
      const button=elements.get(item.id);
      button.classList.toggle('is-selected',item.id===selected);
      button.setAttribute('aria-pressed',String(item.id===selected));
    }
    requestRender();
  }
  function choose(id, ripple=false) {
    selected=id; updateSelection();
    if (ripple) {
      const ring=document.createElement('span');ring.className='universe-ripple';ring.setAttribute('aria-hidden','true');
      elements.get(id).append(ring);
      ring.addEventListener('animationend',()=>ring.remove(),{once:true});
    }
  }
  let cameraFrame=0;
  function stopCamera(){cancelAnimationFrame(cameraFrame);cameraFrame=0;}
  function moveCamera(target){
    stopCamera();
    const from={yaw,pitch,zoom,center:[...center]}, start=performance.now();
    const tick=now=>{
      const t=window.matchMedia('(prefers-reduced-motion: reduce)').matches?1:clamp((now-start)/200,0,1);
      const eased=1-Math.pow(1-t,3);
      yaw=from.yaw+(target.yaw-from.yaw)*eased;
      pitch=from.pitch+(target.pitch-from.pitch)*eased;
      zoom=from.zoom+(target.zoom-from.zoom)*eased;
      center=from.center.map((v,i)=>v+(target.center[i]-v)*eased);
      requestRender();
      cameraFrame=t<1?requestAnimationFrame(tick):0;
    };
    cameraFrame=requestAnimationFrame(tick);
  }
  function localize() {
    lang=document.documentElement.lang;
    document.querySelectorAll('[data-map-i18n]').forEach(element=>element.textContent=text()[element.dataset.mapI18n]);
    stage.setAttribute('aria-label',text().stageLabel);
    document.querySelector('.universe-toolbar').setAttribute('aria-label',text().controls);
    document.querySelector('#universe-zoom-in').setAttribute('aria-label',text().zoomIn);
    document.querySelector('#universe-zoom-out').setAttribute('aria-label',text().zoomOut);
    records.forEach(node=>{
      const button=elements.get(node.id);
      button.setAttribute('aria-label',`${name(node)} · ${node.draft ? text().draftStatus : `Δ ${node.delta.toFixed(2)}`}`);
      button.title=name(node);
      button.querySelector('.universe-node-title').textContent=name(node);
      button.querySelector('small').textContent=node.draft ? text().draftStatus : `Δ ${node.delta.toFixed(2)}`;
    });
    updateSelection();
  }
  records.forEach(node=>{
    const button=document.createElement('button');
    button.type='button'; button.className='universe-node'; button.dataset.universe=node.id;
    button.dataset.demo=String(Boolean(node.draft));
    button.style.setProperty('--orb-color',color(node));
    const orb=document.createElement('span');orb.className='universe-orb';orb.setAttribute('aria-hidden','true');
    const caption=document.createElement('span');caption.className='universe-node-name';caption.setAttribute('aria-hidden','true');
    const title=document.createElement('span');title.className='universe-node-title';
    caption.append(title,document.createElement('small'));button.append(orb,caption);
    button.addEventListener('pointerenter',()=>{if(!pointers.size)setHovered(node.id);});
    button.addEventListener('pointerleave',()=>{if(!pointers.size)setHovered(null);});
    button.addEventListener('focus',()=>setHovered(node.id));
    button.addEventListener('blur',()=>setHovered(null));
    button.addEventListener('click',event=>{if(event.detail===0)choose(node.id,true);});
    elements.set(node.id,button);nodeLayer.append(button);
  });
  function project(position) {
    const x=position[0]-center[0],y=position[1]-center[1],z=position[2]-center[2];
    const rx=x*Math.cos(yaw)+z*Math.sin(yaw), rz=-x*Math.sin(yaw)+z*Math.cos(yaw);
    const ry=y*Math.cos(pitch)-rz*Math.sin(pitch), depth=y*Math.sin(pitch)+rz*Math.cos(pitch);
    const perspective=8/(8-depth);
    const unit=Math.min(width/7.8,height/6.2)*zoom;
    return {x:width/2+rx*unit*perspective,y:height/2-ry*unit*perspective,z:depth,r:Math.max(10,.19*unit*perspective),perspective};
  }
  // A seeded star field stays stable while the view is manipulated.
  let seed=849;
  const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
  const stars=Array.from({length:260},()=>({x:random(),y:random(),r:.3+random()*1.1,a:.16+random()*.55,depth:.3+random()}));
  function render() {
    renderRequest=0;
    if(!width||!height)return;
    ctx.clearRect(0,0,width,height);
    for(const star of stars){
      const x=((star.x*width+yaw*star.depth*22)%width+width)%width;
      const y=((star.y*height+pitch*star.depth*20)%height+height)%height;
      ctx.fillStyle=`rgba(218,229,255,${star.a})`;ctx.beginPath();ctx.arc(x,y,star.r,0,Math.PI*2);ctx.fill();
    }
    const projected=new Map(records.filter(visible).map(node=>[node.id,project(node.position)]));
    const highlight=hovered || selected;
    if(showLines.checked){
      for(const [from,to] of data.connections){
        const a=projected.get(from),b=projected.get(to);if(!a||!b)continue;
        const active=from===highlight||to===highlight;
        const primary=from==='zero'&&to==='404';
        ctx.strokeStyle=active ? 'rgba(188,210,239,.72)' : primary ? 'rgba(168,190,226,.46)' : 'rgba(141,163,209,.22)';
        ctx.lineWidth=active ? 1.5 : primary ? 1.1 : .8;
        ctx.setLineDash(primary ? [] : [3,5]);ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
      }
      ctx.setLineDash([]);
    }
    for(const node of records){
      const button=elements.get(node.id),p=projected.get(node.id);
      button.hidden=!p;
      if(!p)continue;
      const size=p.r*2;
      button.style.setProperty('--orb-size',`${size}px`);
      button.style.transform=`translate3d(${p.x-p.r}px,${p.y-p.r}px,0)`;
      button.style.opacity=String(clamp(.82+p.z*.08,.48,1));
      button.style.zIndex=String(node.id===highlight?450:Math.round((p.z+5)*20));
    }
  }
  function requestRender(){if(!renderRequest)renderRequest=requestAnimationFrame(render);}
  function resize(){
    width=stage.clientWidth;height=stage.clientHeight;
    const dpr=Math.min(window.devicePixelRatio||1,2);
    canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);requestRender();
  }
  const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(stage);
  const point=event=>({x:event.clientX,y:event.clientY});
  const distance=()=>{const p=[...pointers.values()];return Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);};
  stage.addEventListener('pointerdown',event=>{
    if(event.button!==0)return;
    event.preventDefault();
    stopCamera();
    stage.setPointerCapture(event.pointerId);pointers.set(event.pointerId,point(event));
    if(pointers.size===1){
      drag={x:event.clientX,y:event.clientY,yaw,pitch,moved:false,node:event.target.closest('.universe-node')?.dataset.universe};
    }else if(pointers.size===2){pinch={distance:distance(),zoom};if(drag)drag.moved=true;}
  });
  stage.addEventListener('pointermove',event=>{
    if(!pointers.has(event.pointerId))return;
    pointers.set(event.pointerId,point(event));
    if(pointers.size>=2&&pinch){zoom=clamp(pinch.zoom*distance()/Math.max(1,pinch.distance),.6,2.4);requestRender();return;}
    if(!drag)return;
    const dx=event.clientX-drag.x,dy=event.clientY-drag.y;
    if(Math.hypot(dx,dy)>5)drag.moved=true;
    if(drag.moved){stage.classList.add('is-dragging');setHovered(null);yaw=drag.yaw+dx*.006;pitch=clamp(drag.pitch+dy*.006,-1.3,1.3);requestRender();}
  });
  function release(event,cancelled=false){
    if(!pointers.has(event.pointerId))return;
    if(!cancelled&&pointers.size===1&&drag&&!drag.moved&&drag.node){choose(drag.node,true);}
    pointers.delete(event.pointerId);
    if(stage.hasPointerCapture(event.pointerId))stage.releasePointerCapture(event.pointerId);
    if(pointers.size===1){const remaining=[...pointers.values()][0];drag={...remaining,yaw,pitch,moved:true};pinch=null;}
    else if(!pointers.size){drag=null;pinch=null;stage.classList.remove('is-dragging');}
  }
  stage.addEventListener('pointerup',event=>release(event));
  stage.addEventListener('pointercancel',event=>release(event,true));
  stage.addEventListener('pointerleave',()=>{if(!pointers.size)setHovered(null);});
  stage.addEventListener('wheel',event=>{event.preventDefault();stopCamera();zoom=clamp(zoom*Math.exp(-event.deltaY*.001),.6,2.4);requestRender();},{passive:false});
  stage.addEventListener('keydown',event=>{
    if(event.key==='ArrowLeft')yaw-=.12;
    else if(event.key==='ArrowRight')yaw+=.12;
    else if(event.key==='ArrowUp')pitch=clamp(pitch-.12,-1.3,1.3);
    else if(event.key==='ArrowDown')pitch=clamp(pitch+.12,-1.3,1.3);
    else if(event.key==='+'||event.key==='=')zoom=clamp(zoom*1.15,.6,2.4);
    else if(event.key==='-')zoom=clamp(zoom/1.15,.6,2.4);
    else return;
    stopCamera();event.preventDefault();requestRender();
  });
  function focusNode(id){const node=records.find(node=>node.id===id);moveCamera({yaw,pitch,zoom:1.15,center:[...node.position]});choose(id);}
  document.querySelector('#universe-focus-zero').addEventListener('click',()=>focusNode('zero'));
  document.querySelector('#universe-focus-404').addEventListener('click',()=>focusNode('404'));
  document.querySelector('#universe-reset').addEventListener('click',()=>{moveCamera({yaw:-.16,pitch:.12,zoom:1,center:[0,0,0]});setHovered(null);choose('zero');});
  for(const [id,factor] of [['universe-zoom-in',1.15],['universe-zoom-out',1/1.15]]){
    const button=document.getElementById(id);
    button.addEventListener('pointerdown',event=>event.stopPropagation());
    button.addEventListener('click',()=>{stopCamera();zoom=clamp(zoom*factor,.6,2.4);requestRender();});
  }
  showLines.addEventListener('change',requestRender);
  showExamples.addEventListener('change',()=>{if(!showExamples.checked&&selected.startsWith('draft'))choose('zero');setHovered(null);requestRender();});
  document.querySelector('#language').addEventListener('change',localize);
  localize();resize();
})();
