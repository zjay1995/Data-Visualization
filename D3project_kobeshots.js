d3.csv("/Users/zhijiewang/Google Drive/Data Science/Data Visualization with D3/Kobe Shots/data.csv"),function(data){
    var shots = d3.select("svg")
        .selectAll("g")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "shot")
        .attr("transform", function(d){
            return "translate(" +10*d.loc_x +"," +10*d.loc_y +")";
        })
    shots.append("circle")
        .attr("r",5)
}