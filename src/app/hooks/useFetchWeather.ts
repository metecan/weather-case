import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const useFetchWeather = (lat: string, lon: string) => {
  const { data, isLoading, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily,minutely,hourly,alerts&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`,
    fetcher,
  );
  return { data, isLoading, error };
};
