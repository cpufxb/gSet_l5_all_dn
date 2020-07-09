function config() {
    var ini = [
        {
            name: 'default',
            roi: {"x0": 0, "x1": 27352, "y0": 0, "y1": 20268 },
            imageSize: [262144, 194250],
            cellBoundaries: 'https://raw.githubusercontent.com/acycliq/gSet_l5_all_data/master/data/json/gSet.Full_seg.dn/cell_coords_landscape.json',
            tiles: 'https://raw.githubusercontent.com/acycliq/gSet_l5_all_data/master/img/262144px/{z}/{y}/{x}.jpg',
            spot_json: function(d){ return "https://raw.githubusercontent.com/acycliq/gSet_l5_all_data/master/data/json/gSet.Full_seg.dn/geneData_landscape_split/" + 'geneData_landscape_' + d + '.json'},
            cell_json: function(d){ return "https://raw.githubusercontent.com/acycliq/gSet_l5_all_data/master/data/json/gSet.Full_seg.dn/cellData_landscape_split/" + 'cellData_landscape_' + d + '.json'},
            num_jsons: 15 // number of json splits
        }, // 1
    ];
    var out = d3.map(ini, function (d) {
        return d.name;
    });
    return out
}
