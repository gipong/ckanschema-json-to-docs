/**
 * Created by gipong on 2017/2/3.
 */
var fs = require('fs');
var schemaSource = fs.readFileSync('taijiang_scheming.json');
var jsonSource = JSON.parse(schemaSource);

var temp = 'Class Theme_keyword_type <<CodeList>> {\n';
jsonSource.dataset_fields.forEach(function(e) {
   if(e.field_name == 'theme_keyword') {
       e.choices.forEach(function(i) {
           temp = temp+`\t+${i.value}\n`
       });
   }
    fs.writeFile(`theme_keyword_list.txt`, `${temp}\n}`);
});