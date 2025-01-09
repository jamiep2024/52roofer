interface ServiceArea {
  name: string;
  slug: string;
}

const serviceAreas: Record<string, ServiceArea> = {
  abingdon: {
    name: 'Abingdon',
    slug: 'abingdon'
  },
  aldershot: {
    name: 'Aldershot',
    slug: 'aldershot'
  },
  amersham: {
    name: 'Amersham',
    slug: 'amersham'
  },
  andover: {
    name: 'Andover',
    slug: 'andover'
  },
  ascot: {
    name: 'Ascot',
    slug: 'ascot'
  },
  aylesbury: {
    name: 'Aylesbury',
    slug: 'aylesbury'
  },
  banbury: {
    name: 'Banbury',
    slug: 'banbury'
  },
  basingstoke: {
    name: 'Basingstoke',
    slug: 'basingstoke'
  },
  beaconsfield: {
    name: 'Beaconsfield',
    slug: 'beaconsfield'
  },
  bicester: {
    name: 'Bicester',
    slug: 'bicester'
  }
  // Add more areas as needed
};

export { serviceAreas };
