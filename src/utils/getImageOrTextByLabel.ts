const SVGS_FOLDER_PATHS = '/svgs';

export const isImage = (src: string) => /\.(svg|png|jpg|jpeg|ico)$/i.test(src);

export const getImageOrTextByLabel = (label: string) => {
  const labelLowercase = label.toLowerCase();
  if (labelLowercase === 'git') return `${SVGS_FOLDER_PATHS}/git.svg`;
  return label;
};
