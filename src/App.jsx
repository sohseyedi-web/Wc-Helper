import { useEffect } from "react";
import Location from "./components/location/Location"
import { getCookie, setCookie } from "./utils/cookies";
import AlertNotice from "./components/AlertNotice";

function App() {

  useEffect(() => {
    const hasSeenAlert = getCookie('hasSeenAlert');

    if (!hasSeenAlert) {
      alert('لطفا یادت نره از فیلترشکن استفاده کنی');
      setCookie('hasSeenAlert', 'true', 365);
    }
  }, []);


  return (
    <section className="max-w-4xl container mx-auto px-5 lg:px-0">
      <Location />
      <AlertNotice />
    </section>
  )
}

export default App
