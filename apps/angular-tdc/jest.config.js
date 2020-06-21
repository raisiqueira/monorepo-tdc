module.exports = {
  name: 'angular-tdc',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-tdc',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
