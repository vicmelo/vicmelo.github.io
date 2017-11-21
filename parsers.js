
function getProjects() {    
    for(i=0;i<projects.length;i++){
        document.write("<div class=\"col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 project_cell\">"+
            "<a href=\""+projects[i].url+"\" target=\"_blank\">"+           
            "<div class=\"project_img\" style=\"background-image:url('"+projects[i].imageURL+"');overflow:hidden;height:278px; background-size: cover;background-position:center;background-repeat:no-repeat;\">"+
            "<div class=\"project_image_color_overlay\"></div>"+
            "</div>"+
            "<span class=\"project_title\">"+projects[i].name+"</span>"+
            "</a>"+
            "</div>");
        
    }
}

function getPapers() {
    for(var i=0;i<papers.length;i++){
        document.write("<tr class=\"paper_row\"><td><a href=\""+papers[i].url+"\" target=\"_blank\"><h5 class=\"paper_title\">"+papers[i].title+"</h5></a><h6 class=\"paper_authors\">"+papers[i].authors+"</h6></td></tr>");
    }
}