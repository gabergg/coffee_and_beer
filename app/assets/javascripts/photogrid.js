function initialize_photogrid() {
    $("#photogrid").nanoGallery({
        //thumbnailWidth: 'auto',
        thumbnailGutterWidth: 10,
        thumbnailGutterHeight: 10,
        userID: '99000315@N06',
        //userID: '126685552@N06',
        photoset: 'none',
        kind: 'flickr',
        photoSorting: 'standard',
        //maxItemsPerLine: 4,
        paginationMaxLinesPerPage: 5,
        colorSchemeViewer: 'dark',
        thumbnailLabel: { display: true, position: 'onBottom', titleMaxLength: 20, align: 'center'},
        viewerToolbar: { autoMinimize: 2000 },
        theme: 'light',
        touchAnimation: false
    });
}