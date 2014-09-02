 $(document).ready(function () {
    $("#photogrid").nanoGallery({
      thumbnailWidth: 250,
      thumbnailHeight: 'auto',
      thumbnailGutterWidth: 10,
      thumbnailGutterHeight: 10,
      userID: '126685552@N06',
      photoset: 'none',
      kind:'flickr',
      photoSorting: 'random',
      maxItemsPerLine: 4,
      thumbnailLabel:{ display: true, position: 'onBottom', titleMaxLength: 20, align: 'center'},
      theme: 'light',
      touchAnimation: false
    });
  });
