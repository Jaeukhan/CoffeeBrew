import tw from 'tailwind-styled-components';

type objtype = {
  id: number;
  idx: number;
  title: string;
  img?: string;
};

interface ServeyProps {
  key: number;
  data: objtype;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  select: number[];
  setSelect: React.Dispatch<React.SetStateAction<number[]>>;
}

const SelectCard = ({
  data,
  page,
  setPage,
  select,
  setSelect,
}: ServeyProps) => {
  const after = () => {
    if (1 <= page && page < 8) {
      setPage(page + 1);
    } else if (page === 8) {
      console.log(select);
    }
  };

  const click = (i: number) => {
    const copy = [...select];
    copy[i] = data.idx;
    setSelect(copy);
    after();
    console.log(select);
  };

  return (
    <OutCard
      onClick={() => {
        click(data.id);
      }}
    >
      {data.img ? <CardImg src={data.img}></CardImg> : null}
      <CardTitle>{data.title}</CardTitle>
    </OutCard>
  );
};

export default SelectCard;

const OutCard = tw.button`w-1/5 border border-mainOrige hover:bg-mainOrige hover:text-white flex flex-col items-center justify-center  py-10 px-5 mx-5 rounded-lg break-normal min-h-1/5`;
const CardImg = tw.img`w-full mb-10 bg-white`;
const CardTitle = tw.div`text-2xl font-bold`;
const MoveButton = tw.button`bg-transparent hover:bg-mainOrige text-6xl text-white font-semibold hover:text-white py-4 px-2 border border-white hover:border-transparent rounded`;
