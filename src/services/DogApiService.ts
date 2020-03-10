import Dog from '@/models/dog';

function getDogs(): Array<Dog> {
  return [
    {
      id: '1',
      name: ['มาเฟีย', 'กุ๊บกิ๊บ'],
      breed: 'ผสม',
      age: 8,
      ageUnit: 'ปี',
      sex: 'F',
      description: 'ดำ อกขาว',
      isAlive: true,
      collarColor: 'G',
      caretaker: 'นายเกียรติชัย บุญทารักษ์',
      caretakerPhone: ['0884096740'],
      location: 'คณะวิศวกรรมศาสตร์ อาคาร 30 ปี มหาวิทยาลัยเชียงใหม่',
    },
    {
      id: '2',
      name: ['ตู้เย็น', 'น้ำตาล'],
      breed: 'ผสม',
      age: '8',
      ageUnit: 'ปี',
      sex: 'M',
      description: 'ขาว หัวน้ำตาล',
      isAlive: true,
      collarColor: 'G',
      caretaker: 'น.ส.แก้วมณี อุดมสม',
      caretakerPhone: ['0869136952'],
      location: 'คณะวิศวกรรมศาสตร์ อาคาร 30 ปี มหาวิทยาลัยเชียงใหม่',
    },
  ] as Array<Dog>;
}

function getDog(id: string): Dog | undefined {
  const DogArr: Array<Dog> = [
    {
      id: '1',
      name: ['มาเฟีย', 'กุ๊บกิ๊บ'],
      breed: 'ผสม',
      age: 8,
      ageUnit: 'ปี',
      sex: 'F',
      description: 'ดำ อกขาว',
      isAlive: true,
      collarColor: 'G',
      caretaker: 'นายเกียรติชัย บุญทารักษ์',
      caretakerPhone: ['0884096740'],
      location: 'คณะวิศวกรรมศาสตร์ อาคาร 30 ปี มหาวิทยาลัยเชียงใหม่',
    },
    {
      id: '2',
      name: ['ตู้เย็น', 'น้ำตาล'],
      breed: 'ผสม',
      age: '8',
      ageUnit: 'ปี',
      sex: 'M',
      description: 'ขาว หัวน้ำตาล',
      isAlive: true,
      collarColor: 'G',
      caretaker: 'น.ส.แก้วมณี อุดมสม',
      caretakerPhone: ['0869136952'],
      location: 'คณะวิศวกรรมศาสตร์ อาคาร 30 ปี มหาวิทยาลัยเชียงใหม่',
    },
  ] as Array<Dog>;
  return DogArr.find((dog: Dog) => dog.id === id);
}

export default { getDogs, getDog };
