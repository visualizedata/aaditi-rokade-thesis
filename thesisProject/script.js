// Load CSV
// d3.csv("./data/thesis_data.csv").then(function(data) { });

// Load JSON
d3.json('./data/thesis_data.json').then((data) => {
    
    console.log(data);
    var svg = d3.select(".col-7").append('svg').attr('width', '100%').attr('height','125%')
   
        // ------------------ highlight background ---------------------------
        // var rect = svg.append('rect').attr("x", '0%').attr('y', '0%')
        //               .attr('width', '100%' ).attr('height','100%')
        //               .style('fill','#ffffff'). style('opacity', 0.05)
        
        
        // ------------------ svg by image upload-------------------------------
        // var base = svg.append("image")
        //               .attr("xlink:href","./svg/svg_main.svg").attr('x', 80).attr('y', 40)
        //               .attr("width", dv_width/2*1.5).attr("height", dv_width/2*1.5)
       
      
        // Set SVG
        var base = d3.select('#base').attr("preserveAspectRatio", "xMinYMin meet")
                                     .attr("viewBox", `-150 -50 1350 1350`)
                                     .classed("svg-content", true)
       
       
        // set Center of SVG
        var x = parseInt(d3.select("#base").attr("width")); 
        var y = parseInt(d3.select("#base").attr("height"));
        var fin_x = x/2+150; 
        var fin_y = y/2+150;

        var center = base.append('circle').attr('cx', fin_x).attr('cy', y/2+150).attr('r',5).attr('fill','#ffffff');
        
        var airlines= ['aic', 'jai', 'seg', 'gow', 'igo']
        
         d3.select('#air-india-tab').on('click', (data)=>{
            
             console.log(this.document.activeElement.id); 
             
         });
         
         
        //------------------ AIC can #F87979 ---------------------------------------------
        var aic_can = base.selectAll('aic_can')
                          .data(data).enter()
                          .append('circle').attr('cx', fin_x).attr('cy', (d)=>{
                              var cyy = cy_value(d); return cyy-d.AIC_can*10;
                            }).attr('r',3)
                            .attr('transform', (d, i) => {
                               var angle = set_angle(d); return `rotate( ${angle} ${fin_x} ${fin_y})`;
			            	}).attr('fill','#F87979').attr('visibility','visible');



        //------------------ JAI can #BF98FF ---------------------------------------------
        var jai_can = base.selectAll('jai_can')
                          .data(data).enter()
                          .append('circle').attr('cx', fin_x).attr('cy', (d)=>{
                              var cyy = cy_value(d); return cyy-d.JAI_can*10;
                            }).attr('r',3)
                            .attr('transform', (d, i) => {
                               var angle = set_angle(d); return `rotate( ${angle} ${fin_x} ${fin_y})`;
			            	}).attr('fill','#BF98FF').attr('visibility','visible');
		
		
			            	
		//------------------ SEG can #93A7FA ---------------------------------------------
        var seg_can = base.selectAll('seg_can')
                          .data(data).enter()
                          .append('circle').attr('cx', fin_x).attr('cy', (d)=>{
                              var cyy = cy_value(d); return cyy-d.SEG_can*10;
                            }).attr('r',3)
                            .attr('transform', (d, i) => {
                               var angle = set_angle(d); return `rotate( ${angle} ${fin_x} ${fin_y})`;
			            	}).attr('fill','#93A7FA').attr('visibility','visible');

        
        
        //------------------ GOW can #6CB9AA ---------------------------------------------
        var gow_can = base.selectAll('gow_can')
                          .data(data).enter()
                          .append('circle').attr('cx', fin_x).attr('cy', (d)=>{
                              var cyy = cy_value(d); return cyy-d.SEG_can*10;
                            }).attr('r',3)
                            .attr('transform', (d, i) => {
                               var angle = set_angle(d); return `rotate( ${angle} ${fin_x} ${fin_y})`;
			            	}).attr('fill','#6CB9AA').attr('visibility','visible');
			            
			            	
	
	    //------------------ IGO can #FF5388 ---------------------------------------------
        var igo_can = base.selectAll('igo_can')
                          .data(data).enter()
                          .append('circle').attr('cx', fin_x).attr('cy', (d)=>{
                              var cyy = cy_value(d); return cyy-d.IGO_can*10;
                            }).attr('r',3)
                            .attr('transform', (d, i) => {
                               var angle = set_angle(d); return `rotate( ${angle} ${fin_x} ${fin_y})`;
			            	}).attr('fill','#FF5388').attr('visibility','visible');
			
			
			            	
		//------------------ IAD can #FF5388 ---------------------------------------------
        var iad_can = base.selectAll('iad_can')
                          .data(data).enter()
                          .append('circle').attr('cx', fin_x).attr('cy', (d)=>{
                              var cyy = cy_value(d); return cyy-d.IAD_can*10;
                            }).attr('r',3)
                            .attr('transform', (d, i) => {
                               var angle = set_angle(d); return `rotate( ${angle} ${fin_x} ${fin_y})`;
			            	}).attr('fill','#FF5388').attr('visibility','visible');	            	


        //------- Function ---------- to set Y value
        function cy_value(d){
              if(d.year=='2014')return fin_y-200;
              else if(d.year=='2015')return fin_y-260;
              else if(d.year=='2016')return fin_y-321;
              else if(d.year=='2017')return fin_y-381;
              else if(d.year=='2018')return fin_y-442;
        }
        
        
        //-------- Function --------- to set angle of rotation based on month
        function set_angle(d) {
            
            var angle = 0;
            
              if(d.month=='jan') angle = 0;
              else if(d.month=='feb')angle = 30.00*1;
              else if(d.month=='mar')angle = 30.00*2;
              else if(d.month=='apr')angle = 30.00*3;
              else if(d.month=='may')angle = 30.00*4;
              else if(d.month=='jun')angle = 30.00*5;
              else if(d.month=='jul')angle = 30.00*6;
              else if(d.month=='aug')angle = 30.00*7;
              else if(d.month=='sep')angle = 30.00*8;
              else if(d.month=='oct')angle = 30.00*9;
              else if(d.month=='nov')angle = 30.00*10;
              else if(d.month=='dec')angle = 30.00*11;
            
            return angle;
        }

                             
});       