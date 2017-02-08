var fs = require('fs');
var async = require('async');
var schemaSource = fs.readFileSync('taijiang_scheming.json');
var jsonSource = JSON.parse(schemaSource);

var dataset_field_text = '# Dataset field\n';
var dataset_temp = `<table>
        <tr><td>類別</td><td>屬性名稱</td><td>定義</td><td>選填條件</td><td>最多發生次數</td><td>資料型別</td><td>值域</td><td>備註</td></tr>`;
jsonSource.dataset_fields.forEach(function(item) {
    // item ${jsonSource.dataset_fields.indexOf(item)}
    // preset template : | preset | ${item.preset || 'NULL'} |\n

    //var template = `### ${item.field_name}\n| field | value |\n|:--:|:--:|\n`;
    //template += `| field_name | ${item.field_name} |\n\n`;
    //template += `|| en | zh_TW |\n|:--:|:--:|:--:|\n`;
    //template += `| label | ${item.label.en || 'NULL'} | ${item.label.zh_TW || 'NULL'}|\n\n`;
    //
    //if(item.choices) {
    //    item.choices.forEach(function(choice) {
    //        template += `>#### choice of ${choice.value}\n\t`;
    //        template += `>|| en | zh_TW |\n|:--:|:--:|:--:|\n`;
    //        template += `>| label | ${choice.label.en || 'NULL'} | ${choice.label.zh_TW || 'NULL'}|\n\n`;
    //
    //    });
    //}
    //
    //if(item.validators) {
    //    template += `>#### validators: ${item.validators}\n\n`;
    //}
    //
    //if(item.help_text) {
    //    template += `|| en | zh_TW |\n|:--:|:--:|:--:|\n`;
    //    template += `| help_text | ${item.help_text.en || 'NULL'} | ${item.help_text.zh_TW || 'NULL'}|\n\n`;
    //}
    //
    //dataset_field_text += template;
    //
    //if(jsonSource.dataset_fields.indexOf(item) == jsonSource.dataset_fields.length-1) {
    //    fs.writeFile('Dataset_field.md', dataset_field_text);
    //}
    var validator_str = '';
    var help_text_str = '';
    if(item.validators) {
        validator_str = item.validators.replace(' ', '<br>');
    }

    if(item.help_text) {
        help_text_str = `${item.help_text.zh_TW}<br>${item.help_text.en}`;
    }
    dataset_temp += `<tr>
        <td></td>
        <td>${item.label.zh_TW}<br>${item.label.en}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>${validator_str}</td>
        <td>${help_text_str}</td>
    </tr>`;

    if(item.choices) {
        item.choices.forEach(function(choice) {
            var choice_str = '';
            if(choice.label.en) {
                choice_str = `${choice.label.zh_TW}<br>${choice.label.en}`;
            } else {
                choice_str = choice.label;
            }
            dataset_temp += `<tr>
                <td></td>
                <td>${choice_str}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>`;
        });
    }


    if(jsonSource.dataset_fields.indexOf(item) == jsonSource.dataset_fields.length-1) {
        fs.writeFile('Dataset_field.md', dataset_temp+'</table>');
    }


});

var resource_fields_text = '# Resource field\n';
dataset_temp = `<table>
        <tr><td>類別</td><td>屬性名稱</td><td>定義</td><td>選填條件</td><td>最多發生次數</td><td>資料型別</td><td>值域</td><td>備註</td></tr>`;
jsonSource.resource_fields.forEach(function(item) {
    //var template = `### ${item.field_name}\n| field | value |\n|:--:|:--:|\n`;
    //template += `| field_name | ${item.field_name} |\n\n`;
    //template += `|| en | zh_TW |\n|:--:|:--:|:--:|\n`;
    //template += `| label | ${item.label.en || 'NULL'} | ${item.label.zh_TW || 'NULL'}|\n\n`;
    //
    //if(item.choices) {
    //    item.choices.forEach(function(choice) {
    //        template += `>#### choice of ${choice.value}\n\t`;
    //        template += `>|| en | zh_TW |\n|:--:|:--:|:--:|\n`;
    //        template += `>| label | ${choice.label.en || 'NULL'} | ${choice.label.zh_TW || 'NULL'}|\n\n`;
    //
    //    });
    //}
    //
    //if(item.validators) {
    //    template += `>#### validators: ${item.validators}\n\n`;
    //}
    //
    //if(item.help_text) {
    //    template += `|| en | zh_TW |\n|:--:|:--:|:--:|\n`;
    //    template += `| help_text | ${item.help_text.en || 'NULL'} | ${item.help_text.zh_TW || 'NULL'}|\n\n`;
    //}
    //
    //resource_fields_text += template;
    //
    //if(jsonSource.resource_fields.indexOf(item) == jsonSource.resource_fields.length-1) {
    //    fs.writeFile('Resource_field.md', resource_fields_text);
    //}
    var validator_str = '';
    var help_text_str = '';
    if(item.validators) {
        validator_str = item.validators.replace(' ', '<br>');
    }

    if(item.help_text) {
        help_text_str = `${item.help_text.zh_TW}<br>${item.help_text.en}`;
    }
    dataset_temp += `<tr>
        <td></td>
        <td>${item.label.zh_TW}<br>${item.label.en}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>${validator_str}</td>
        <td>${help_text_str}</td>
    </tr>`;

    if(item.choices) {
        item.choices.forEach(function(choice) {
            var choice_str = '';
            if(choice.label.en) {
                choice_str = `${choice.label.zh_TW}<br>${choice.label.en}`;
            } else {
                choice_str = choice.label;
            }
            dataset_temp += `<tr>
                <td></td>
                <td>${choice_str}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>`;
        });
    }


    if(jsonSource.resource_fields.indexOf(item) == jsonSource.resource_fields.length-1) {
        fs.writeFile('Resource_field.md', dataset_temp+'</table>');
    }
});