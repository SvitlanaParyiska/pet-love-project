interface PetsProps {
  pet: {
    _id: string;
    name: string;
    title: string;
    imgURL: string;
    species: string;
    birthday: string;
    sex: string;
  };
}

const PetsItem = ({ pet }: PetsProps) => {
  return <div>{pet.name}</div>;
};

export default PetsItem;
