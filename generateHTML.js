

// A function to generate markdown for README
function generateHTML({employeerole,mname,mid,memail,officeno,ename,engineeremail,eid,iname,iemail,github_name,internid,school}) {
return `
# ${employeerole}
# ${mname}
# ${mid}
# ${memail}
# ${officeno}
# ${ename}
# ${engineeremail}
# ${eid}
# [github username]${github_name})
# ${iname}
# ${iemail}
# ${internid}
 # ${school}


`;
}

module.exports = generateHTML;
