// 位置是展示用的三維座標，不代表宇宙之間的物理距離。
// draft 節點的 previewDelta 只用於示意配色，並非正式設定。
window.UNIVERSE_MAP_DATA = {
  nodes: [
    {
      id:'zero', 
      code:'UNIVERSE 000', 
      name:{
        'zh-Hant':'零號宇宙',
        en:'Universe Zero',
        ja:'零号宇宙'}, 
        delta:0, 
        position:[0,-.7,.8],
        url: 'universe-000.html'
      },
    {
      id:'404', 
      code:'UNIVERSE 404', 
      name:{
        'zh-Hant':'404號宇宙',
        en:'Universe 404',
        ja:'404号宇宙'
      }, 
      delta:7.84, 
      position:[2.3,1.6,-.5],
      url: 'universe-404.html'
    },
    {id:'draft-a', draft:true, previewDelta:4.2, position:[-2.6,1.1,.4]},
    {id:'draft-b', draft:true, previewDelta:6.6, position:[-1.3,1.5,-1]},
    {id:'draft-c', draft:true, previewDelta:9.3, position:[.7,2,-.6]},
    {id:'draft-d', draft:true, previewDelta:7.8, position:[-3,-.3,-.3]},
    {id:'draft-e', draft:true, previewDelta:2.9, position:[-2.7,-1.8,.6]},
    {id:'draft-f', draft:true, previewDelta:4.6, position:[-.9,-.7,-.7]},
    {id:'draft-g', draft:true, previewDelta:1.3, position:[1.7,-.9,1]},
    {id:'draft-h', draft:true, previewDelta:9.6, position:[.2,-2.3,-.6]},
    {id:'draft-i', draft:true, previewDelta:7.6, position:[-1.8,-2.4,-1]},
    {id:'draft-j', draft:true, previewDelta:3.3, position:[2.6,-2.4,-.9]}
  ],
  connections:[['zero','404'],['zero','draft-f'],['zero','draft-g'],['zero','draft-h'],['draft-f','draft-b'],['draft-b','draft-a'],['draft-b','draft-c'],['draft-a','draft-d'],['draft-d','draft-e'],['draft-e','draft-i'],['draft-h','draft-i'],['draft-g','draft-j'],['draft-c','404'],['404','draft-g']]
};
