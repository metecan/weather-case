'use client';

import { useParams } from 'next/navigation';
import type { FC } from 'react';
import { useRouter } from 'next/navigation';
import { WiHorizonAlt, WiHumidity, WiStrongWind } from 'react-icons/wi';
import { PiThermometerHotDuotone } from 'react-icons/pi';
import { FiChevronLeft } from 'react-icons/fi';
import { convertTo24Hour } from 'src/app/utils/converTime';
import { titleCase } from 'src/app/utils/titleCase';
import IconText from 'src/app/components/IconText/IconText';
import { useFetchWeather } from 'src/app/hooks/useFetchWeather';
import Error from 'src/app/components/Error/Error';

const WeatherPage: FC = () => {
  const router = useRouter();
  const { city, latlong } = useParams();

  if (!city || !latlong) {
    router.push('/');
  }

  const lat = latlong.toString().split('%2C')[0];
  const lon = latlong.toString().split('%2C')[1];

  const { data, isLoading, error } = useFetchWeather(lat, lon);

  if (!error) {
    return <Error error={error} reset={() => router.push('/')} />;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <div className="flex flex-1 justify-center items-center text-3xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-[900px] flex flex-col justify-center items-between p-4 h-full">
        <button
          className="text-[16px] font-bold mb-[50px] sm:mb-[200px] mt-10 flex justify-start items-center hover:opacity-80 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <span className="mr-2 text-xl">
            <FiChevronLeft />
          </span>
          Back
        </button>
        {data && (
          <div className="flex flex-col flex-1">
            <div className="flex flex-col">
              <div className="flex flex-row justify-center flex-wrap sm:justify-between items-start gap-10">
                <div className="flex flex-col">
                  <div className="text-[32px]">
                    <img
                      width={64}
                      height={64}
                      src={`https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`}
                    />
                    <span className="font-light">{titleCase(decodeURIComponent(city.toString()))}, Türkiye</span>
                  </div>
                  <div className="text-[64px] font-bold">{data.current.temp}°C</div>
                  <small className="text-sm opacity-70">
                    {data.current.weather[0].main} ({data.current.weather[0].description})
                  </small>
                </div>
                <div className="flex flex-col gap-4">
                  <IconText label="Feels Like">
                    <PiThermometerHotDuotone />
                    {data.current.feels_like}°C
                  </IconText>
                  <IconText label="Humidity">
                    <WiHumidity /> {data.current.humidity}%
                  </IconText>
                  <IconText label="Wind">
                    <WiStrongWind /> {data.current.wind_speed} km/h
                  </IconText>
                  <IconText label="Sunrise">
                    <WiHorizonAlt /> {convertTo24Hour(new Date(data.current.sunrise * 1000).toLocaleTimeString())}
                  </IconText>
                  <IconText label="Sunset">
                    <WiHorizonAlt /> {convertTo24Hour(new Date(data.current.sunset * 1000).toLocaleTimeString())}
                  </IconText>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default WeatherPage;
