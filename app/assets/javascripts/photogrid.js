function initialize_photogrid() {
    $("#photogrid").nanoGallery({
        thumbnailGutterWidth: 10,
        thumbnailGutterHeight: 10,
        userID: '99000315@N06',
        photoset: '72157648494522432',
        kind: 'flickr',
        photoSorting: 'standard',
        paginationMaxLinesPerPage: 5,
        colorSchemeViewer: 'dark',
        thumbnailLabel: { display: true, displayDescription: true, position: 'overImageonBottom', hideIcons: true, titleMaxLength: 20, align: 'center'},
        viewerToolbar: { autoMinimize: 2000 },
        theme: 'light',
        touchAnimation: false
    });
}