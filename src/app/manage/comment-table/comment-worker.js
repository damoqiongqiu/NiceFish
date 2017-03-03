onmessage = event => {
    if (event.data && "load" === event.data.action){
        //构造返回结果
        let rows = [];
        for(let i=1;i<100000;i++){
            rows.push({
                 No:i,
                 content:'内容'+i,
                 user:'admin',
                 date:new Date()
            });
        }
        postMessage({rows});
    }
}