'use client';

import { getProducts } from './service';
import { useQuery } from '@tanstack/react-query';

function Client() {

  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    // staleTime: 600000,  // Cache data for 1 minute

    // refetchInterval: 600000 // Refetch data every 10 minutes
  });

  console.log(data, error)
  // const [data, setData] = useState([]);
  // const get = async () => {
  //   const _data = await getProducts();
  //   setData(_data)
  // }
  // useEffect(() => {
  //   get()
  // }, [])
  if (isLoading) return <div>Loading...</div>
  return (
    <div>
      {data?.map((item: any) => {
        return (
          <div key={item.id}>
            <span>{item.name}</span>
            <span className='mx-10'>-</span>
            <span>{item.quantity}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Client