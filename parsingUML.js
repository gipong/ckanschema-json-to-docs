var fs = require('fs');
var async = require('async');

var schemaFile = process.argv[2];
var umlFile = process.argv[3];

var schemaSource = fs.readFileSync(schemaFile);
var umlSource = fs.readFileSync(umlFile);

var jsonSource = JSON.parse(schemaSource);
var uml = umlSource.toString().split('\n');
var classList = {};
var noteList = {};
var otherList = [];
var index = '';
var dataset_temp = `<table>
        <tr><td>屬性名稱</td><td>定義</td>
        <td>選填條件</td><td>最多發生次數</td><td>資料型別</td>
        <td>值域</td><td>備註</td></tr>`;

for(var i in uml) {
    var check = uml[i].split(/(\s+)/);
    var addList = uml[i].replace(/(\s+)/, '');
    if(check.indexOf('Class') > 0) {
        if(check[check.indexOf('Class') + 4] && check[check.indexOf('Class') + 4][0] == '<') {
            otherList.push(check[check.indexOf('Class') + 2]);
        }
        classList[check[check.indexOf('Class') + 2]] = [];
        index = check[check.indexOf('Class') + 2];
    }

    if(addList[0] == '+') {
        var pushitem = addList.split(/\+|:|=/);
        pushitem.shift();
        classList[index].push(pushitem); // [attribute, field_type, default_value(optional)]
    }

    if(addList[0] == '/') {
        var attr = JSON.parse(/\/'(.*)'\//g.exec(addList)[1]);
        var len = classList[index].length;
        var key = classList[index][len-1][0];
        noteList[key] = attr;
    }

}

Object.keys(classList).forEach(function(e) {
    if(classList[e].length < 1) {
        delete classList[e];
    }
});

function createDocument(doc, obj) { //
    var template = '';
    var check = 1;

    (otherList.indexOf(doc) != -1)
        ?(dataset_temp = `<table><tr><td>屬性名稱</td><td>定義</td></tr>`)
        :(dataset_temp = `<table>
        <tr><td>屬性名稱</td><td>定義</td>
        <td>選填條件</td><td>最多發生次數</td><td>資料型別</td>
        <td>值域</td><td>備註</td></tr>`);

    obj.forEach(function(item) {
        var noteinfo = noteList[item[0]] || '';
        var m = /(.*)\[(\d)..(.)\]/g.exec(item[0]);
        var field_name_mapping = '',
            optional = '',
            occur = '',
            value = '';
        if(m) {
            field_name_mapping = m[1];
            optional = (m[2]==0?'O':'M');
            occur = (m[3]=='*'?'N':m[3]);
        } else {
            field_name_mapping = item[0];
        }

        if(noteinfo) {
            value = noteinfo['值域'] || '';
        }

        if(otherList.indexOf(doc) != -1) {
            template += `<tr>
                <td>${field_name_mapping}</td>
                <td>${noteinfo.def || ''}</td>
            </tr>`;
        } else {
            jsonSource.dataset_fields.forEach(function(e) {
                if(e.field_name == field_name_mapping) {
                    var validator_str = '';
                    var help_text_str = '';
                    var type_str = item[1];
                    if(e.validators) {
                        validator_str = e.validators.replace(' ', '<br>');
                    }

                    if(e.help_text) {
                        help_text_str = `${e.help_text.zh_TW}<br>${e.help_text.en}`;
                    }

                    if(otherList.indexOf(item[1]) > -1) {
                        type_str = `<a href="${item[1]}.html">${item[1]}</a>`
                    }

                    template += `<tr style="max-width: 100%;">
                        <td>${e.label.zh_TW}<br>${e.label.en}</td>
                        <td style="min-width: 100px;">${noteinfo.def || ''}</td>
                        <td>${optional}</td>
                        <td>${occur}</td>
                        <td>${type_str}</td>
                        <td>${validator_str}</td>
                        <td>${help_text_str}</td>
                    </tr>`;
                    check = 1;
                    return;
                }
            });
            jsonSource.resource_fields.forEach(function(e) {
                if(e.field_name == field_name_mapping) {
                    var validator_str = '';
                    var help_text_str = '';
                    var type_str = item[1];
                    if(e.validators) {
                        validator_str = e.validators.replace(' ', '<br>');
                    }

                    if(e.help_text) {
                        help_text_str = `${e.help_text.zh_TW}<br>${e.help_text.en}`;
                    }

                    if(otherList.indexOf(item[1]) > -1) {
                        type_str = `<a href="${item[1]}.html">${item[1]}</a>`
                    }

                    template += `<tr style="max-width: 100%;">
                        <td>${e.label.zh_TW}<br>${e.label.en}</td>
                        <td style="min-width: 100px;">${noteinfo.def || ''}</td>
                        <td>${optional}</td>
                        <td>${occur}</td>
                        <td>${type_str}</td>
                        <td>${validator_str}</td>
                        <td>${help_text_str}</td>
                    </tr>`;
                    check = 0;
                    return;
                }
            });
        }

    });

    var mdFolder = (check)?`./datasetFields_md`:`./resourceFields_md`;
    fs.writeFile(`${mdFolder}/${doc}.md`, dataset_temp+template+'</table>');
}

if(!fs.existsSync('./datasetFields_md')) {
    fs.mkdirSync('./datasetFields_md');
}
if(!fs.existsSync('./resourceFields_md')) {
    fs.mkdirSync('./resourceFields_md');
}

console.log(classList);
Object.keys(classList).forEach(function(e) {
    createDocument(e, classList[e]);
});

fs.readFile(umlFile, function(err, data) {
    if(err) { return console.log(err); }

    var regex = /\+(.*)\:.*\n/g;
    var match;
    var replacestr = '';
    var result = data.toString();

    while ((match = regex.exec(data)) !== null) {
        if (match.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        match.forEach((m, groupIndex) => {
            if(groupIndex == 0) {
                replacestr = m;
            } else {
                if(noteList[m] !== undefined && noteList[m]['zhTW'] !== undefined) {
                    result = result.replace(replacestr, `+${replacestr.replace(/\+\w*/, noteList[m]['zhTW'])}`);
                }
            }
        });
    }

    fs.writeFile(`UML_zhTW.md`, result, 'utf-8', function(err) {
       if(err) { return console.log(err); }
    });

});

var summaryTemp = `#Summary
* [Introduction](README.md)
* [UML diagram](UML.md)
    * [zhTW](UML_zhTW.md)
    * [en](UML_source.md)
* [Dataset Fields](Dataset_field.md)
`;

fs.writeFile(`README.md`, `Introduction`, 'utf-8', function(err) {
    if(err) { return console.log(err); }
});
fs.writeFile(`UML.md`, `UML diagram`, function(err) {
    if(err) { return console.log(err); }
});
fs.writeFile(`Dataset_field.md`, `Dataset field page`, 'utf-8', function(err) {
    if(err) { return console.log(err); }
});

fs.readdir(`./datasetFields_md`, function(err, items) {
    items.forEach(function(item) {
        summaryTemp = summaryTemp + `    * [${item}](./datasetFields_md/${item})\n`;
    });
    fs.readdir(`./resourceFields_md`, function(err, items) {
        items.forEach(function(item) {
            summaryTemp += `* [Resource Fields](./resourceFields_md/${item})\n`;
        });
        fs.writeFile(`SUMMARY.md`, summaryTemp, 'utf-8', function(err) {
            if(err) { return console.log(err); }
        });
    });
});




