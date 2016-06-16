//A custom table that lists all Central Indiana guides and the guide's owner

//1. Call API to return list of guides for Central Indiana

var lgAPI = "http://lgapi.libapps.com/1.1/guides/?site_id=103&key=83d416dc1ba38e91c12fee5de29a4527&expand=owner,subjects&tag_names[]=Central%20Indiana%20Region&status[]=1&sort_by=name&sort_dir=asc";


//2. inject guide title and owner name into HTML

function displayProfile(data){

    $.each(data, function(i, guide) {
       $('#guideTable').append('<tr><td>' + guide.name + '</td><td>' + guide.subjects.name + '</td><td>' + guide.owner.first_name + ' ' + guide.owner.last_name + '</td></tr>')
       });
 
}

//3. Load
$.getJSON(lgAPI, displayProfile);
