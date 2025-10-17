import awardsImage from '../assets/images/awards.png';
import companyForms from '../assets/images/comp_forms.png';
import docPrint from '../assets/images/doc_printing.png';
import giveAways from '../assets/images/giveaways.png';
import laserEng from '../assets/images/laser_eng.png';
import pvcID from '../assets/images/pvc_id_pkg.png';
import schoolForms from '../assets/images/school_forms.png';
import souv from '../assets/images/souvenirs.png';
import tshirtPrint from '../assets/images/tshirt_printing.png';
import uvPrint from '../assets/images/uv_print.png';



export interface GalleryItem {
  id: number;
  url: string;
  title?: string;
}

export const galleryPhotos: GalleryItem[] = [
  {
    id: 1,
    url: awardsImage,
    title: 'Awards and Recognition Printing'
  },
  {
    id: 2,
    url: companyForms,
    title: 'Company Forms and Printing Needs'
  },
  {
    id: 3,
    url: docPrint,
    title: 'Document Printing'
  },
  {
    id: 4,
    url: giveAways,
    title: 'Customized Sublimation Souvenirs and Giveaways'
  },
  {
    id: 5,
    url: souv,
    title: 'Customized Sublimation Souvenirs and Giveaways'
  },
  {
    id: 6,
    url: laserEng,
    title: 'Laser Engraving'
  },
  {
    id: 7,
    url: pvcID,
    title: 'PVC ID Package'
  },
  {
    id: 8,
    url: schoolForms,
    title: 'School Forms and Printing needs'
  },
  {
    id: 9,
    url: tshirtPrint,
    title: 'T-Shirt Printing'
  },
  {
    id: 10,
    url: uvPrint,
    title: 'UV Print'
  }
];

export {};