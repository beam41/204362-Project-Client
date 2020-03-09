function getDogs() {
  return [
    {
      id: 1,
      Name: ['มาเฟีย', 'กุ๊บกิ๊บ'],
      Breed: 'ผสม',
      Age: 8,
      AgeUnit: 'ปี',
      Sex: 'F',
      Description: 'ดำ อกขาว',
      IsAlive: true,
      CollarColor: 'G',
      Caretaker: 'นายเกียรติชัย บุญทารักษ์',
      CaretakerPhone: ['0884096740'],
      Location: 'คณะวิศวกรรมศาสตร์ อาคาร 30 ปี มหาวิทยาลัยเชียงใหม่',
    },
    {
      id: 2,
      Name: ['ตู้เย็น', 'น้ำตาล'],
      Breed: 'ผสม',
      Age: '8',
      AgeUnit: 'ปี',
      Sex: 'M',
      Description: 'ขาว หัวน้ำตาล',
      IsAlive: true,
      CollarColor: 'G',
      Caretaker: 'น.ส.แก้วมณี อุดมสม',
      CaretakerPhone: ['0869136952'],
      Location: 'คณะวิศวกรรมศาสตร์ อาคาร 30 ปี มหาวิทยาลัยเชียงใหม่',
    },
  ];
}

function getDog(id: number) {
  return [
    {
      id: 1,
      Name: ['มาเฟีย', 'กุ๊บกิ๊บ'],
      Breed: 'ผสม',
      Age: 8,
      AgeUnit: 'ปี',
      Sex: 'F',
      Description: 'ดำ อกขาว',
      IsAlive: true,
      CollarColor: 'G',
      Caretaker: 'นายเกียรติชัย บุญทารักษ์',
      CaretakerPhone: ['0884096740'],
      Location: 'คณะวิศวกรรมศาสตร์ อาคาร 30 ปี มหาวิทยาลัยเชียงใหม่',
    },
    {
      id: 2,
      Name: ['ตู้เย็น', 'น้ำตาล'],
      Breed: 'ผสม',
      Age: '8',
      AgeUnit: 'ปี',
      Sex: 'M',
      Description: 'ขาว หัวน้ำตาล',
      IsAlive: true,
      CollarColor: 'G',
      Caretaker: 'น.ส.แก้วมณี อุดมสม',
      CaretakerPhone: ['0869136952'],
      Location: 'คณะวิศวกรรมศาสตร์ อาคาร 30 ปี มหาวิทยาลัยเชียงใหม่',
    },
  ][id];
}

export default { getDogs, getDog };
