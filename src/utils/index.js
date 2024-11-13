export function searchTree(nodes, searchKey, param) {
    for (let _i = 0; _i < nodes.length; _i++) {
        if (nodes[_i][param] === searchKey) {
            return nodes[_i];
        } else {
            if (nodes[_i].children && nodes[_i].children.length > 0) {
                let res = searchTree(nodes[_i].children, searchKey, param);
                if (res) {
                    return res;
                }
            }
        }
    }
    return null;
}
