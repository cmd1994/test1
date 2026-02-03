var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '高德矢量',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://webrd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=8'
            })
        });

        var lyr__1 = new ol.layer.Tile({
            'title': '高德卫星图',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'
            })
        });

        var lyr__2 = new ol.layer.Tile({
            'title': '高德卫星图注记',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://webst01.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
            })
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: '吉林省行政区域',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 吉林省行政区域'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: '自驾游路线',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 自驾游路线'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: '途经点',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> 途经点'
            });
var group_ = new ol.layer.Group({
                                layers: [lyr__4,lyr__5,],
                                fold: 'open',
                                title: '路书'});

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(false);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,group_];
lyr__3.set('fieldAliases', {'adcode': 'adcode', 'name': 'name', 'center': 'center', 'centroid': 'centroid', 'childrenNum': 'childrenNum', 'level': 'level', 'acroutes': 'acroutes', 'parent': 'parent', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'road_name': '路名', 'orientation': 'orientation', 'instruction': 'instruction', 'step_distance': 'step_distance', });
lyr__5.set('fieldAliases', {'fid': 'fid', '途经点': '途经点', '推荐打卡地': '推荐打卡地', '图片附件': '图片附件', '图片统计': '图片统计', '一对多图片附件': '一对多图片附件', });
lyr__3.set('fieldImages', {'adcode': 'Range', 'name': 'TextEdit', 'center': 'List', 'centroid': 'List', 'childrenNum': 'Range', 'level': 'TextEdit', 'acroutes': 'List', 'parent': 'KeyValue', });
lyr__4.set('fieldImages', {'fid': 'TextEdit', 'road_name': 'TextEdit', 'orientation': 'TextEdit', 'instruction': 'TextEdit', 'step_distance': 'Range', });
lyr__5.set('fieldImages', {'fid': 'Hidden', '途经点': 'TextEdit', '推荐打卡地': 'TextEdit', '图片附件': 'TextEdit', '图片统计': 'Range', '一对多图片附件': 'TextEdit', });
lyr__3.set('fieldLabels', {'adcode': 'no label', 'name': 'no label', 'center': 'no label', 'centroid': 'no label', 'childrenNum': 'no label', 'level': 'no label', 'acroutes': 'no label', 'parent': 'no label', });
lyr__4.set('fieldLabels', {'fid': 'hidden field', 'road_name': 'inline label - always visible', 'orientation': 'inline label - always visible', 'instruction': 'inline label - always visible', 'step_distance': 'inline label - always visible', });
lyr__5.set('fieldLabels', {'途经点': 'inline label - always visible', '推荐打卡地': 'inline label - always visible', '图片附件': 'inline label - always visible', '图片统计': 'inline label - always visible', '一对多图片附件': 'inline label - always visible', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});