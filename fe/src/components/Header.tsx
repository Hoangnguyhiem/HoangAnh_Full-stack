
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Header = () => {

  const [userId, setUserId] = useState(null); // Initialize state with null

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const { data } = JSON.parse(user);
      setUserId(data.id);
    }
  }, []); // Empty dependency array to run this effect only on mount

  console.log(userId);
  return (
    <>
      <div className="bg-black h-[42px] text-center flex">
        <span className='text-white justify-center flex m-auto text-[11px] font-[600] lg:text-[14px]'>Ưu đãi 5% cho dơnd hàng đầu tiên* | Nhập mã: MLBWELCOM</span>
      </div>
      <header className='py-[8px] h-[57px] sticky top-0 z-10 bg-white lg:h-[64px]'>
        <div className="flex text-center justify-center h-[100%] px-[15px] pc:px-[48px]">
          <div className="flex">
            <div className="flex items-center lg:hidden">
              <a href="" className='w-[40px] h-[40px] flex justify-center items-center'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="10" y="4" width="12" height="1" rx="0.5" fill="#000"></rect> <rect x="6" y="11" width="12" height="1" rx="0.5" fill="#000"></rect> <rect x="2" y="18" width="12" height="1" rx="0.5" fill="#000"></rect> </svg>
              </a>
            </div>
            <div className="flex items-center">
              <Link to={`/`} className='lg:hidden w-[84px] h-[40px] flex justify-center items-center text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="69.53" height="24" viewBox="0 0 84 24" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M27.6027 0L17.7745 10.585L14.1671 0H6.94734V0.005L5.41862 0L6.33686 2.365L1.14528 19.9L0 24H7.24501L10.6203 12.505L13.1177 18.435H17.8199L23.8036 12.505L20.4283 24H27.7742L34.8224 0H27.6027ZM75.8708 7.25C75.5933 8.195 74.67 9.205 72.6519 9.205H68.0758L69.2261 5.295H73.8022C75.8153 5.295 76.1483 6.305 75.8708 7.25ZM73.5499 16.585C73.2573 17.595 72.2583 18.71 70.2402 18.71H65.2908L66.5269 14.495H71.4814C73.4944 14.495 73.8526 15.575 73.555 16.585H73.5499ZM83.1208 7.04C84.3317 2.895 82.031 0 75.8203 0H61.86L62.7884 2.2L57.1831 21.68L54.7714 24H69.4078C74.7356 24 79.5336 23.5 80.8807 18.915C81.8696 15.545 80.8858 12.69 79.8464 12.08C80.916 11.575 82.3186 9.77 83.1208 7.04ZM41.1896 18.74H51.3709H51.376C51.418 18.7175 51.4112 18.7212 51.3897 18.733C51.2824 18.7916 50.8087 19.0503 54.2568 17.225L52.1984 23.995H30.6853L32.9961 21.69L38.7527 2.32L37.7891 0H46.694L41.1896 18.74Z" fill="black"></path> </svg>
              </Link>
              <Link to={`/`} className='hidden lg:flex w-[84px] h-[40px] justify-center items-center text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="84" height="24" viewBox="0 0 84 24" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M27.6027 0L17.7745 10.585L14.1671 0H6.94734V0.005L5.41862 0L6.33686 2.365L1.14528 19.9L0 24H7.24501L10.6203 12.505L13.1177 18.435H17.8199L23.8036 12.505L20.4283 24H27.7742L34.8224 0H27.6027ZM75.8708 7.25C75.5933 8.195 74.67 9.205 72.6519 9.205H68.0758L69.2261 5.295H73.8022C75.8153 5.295 76.1483 6.305 75.8708 7.25ZM73.5499 16.585C73.2573 17.595 72.2583 18.71 70.2402 18.71H65.2908L66.5269 14.495H71.4814C73.4944 14.495 73.8526 15.575 73.555 16.585H73.5499ZM83.1208 7.04C84.3317 2.895 82.031 0 75.8203 0H61.86L62.7884 2.2L57.1831 21.68L54.7714 24H69.4078C74.7356 24 79.5336 23.5 80.8807 18.915C81.8696 15.545 80.8858 12.69 79.8464 12.08C80.916 11.575 82.3186 9.77 83.1208 7.04ZM41.1896 18.74H51.3709H51.376C51.418 18.7175 51.4112 18.7212 51.3897 18.733C51.2824 18.7916 50.8087 19.0503 54.2568 17.225L52.1984 23.995H30.6853L32.9961 21.69L38.7527 2.32L37.7891 0H46.694L41.1896 18.74Z" fill="black"></path> </svg>
              </Link>
            </div>
          </div>

          <div className="items-center ml-[30px] hidden lg:flex">
            <nav>
              <ul className="flex text-[17px] font-[700]">
                <li className="hover"><a className="hover:text-[#BB9244] hover:border-b-[1px] hover:border-b-black active:text-[#BB9244] active:border-b-[1px] active:border-b-black py-[15px] px-[18px]" href="">QUẦN ÁO</a>
                  <div className="hoverStatus hidden absolute py-[40px] w-[100%] top-[100%] bg-white left-0 z-10">
                    <div className="flex justify-center max-w-[1200px] m-[0_auto]">
                      <ul className="flex min-w-[700px] *:text-[14px]">


                        <li className="text-left">
                          <div className="mb-[12px]">
                            ÁO
                          </div>
                          <ul className="*:font-[500] *:text-[#787878]">
                            <li className="mt-[4px]">
                              <a href="">
                                Áo thun
                              </a>
                            </li>
                            <li className="mt-[4px]">
                              <a href="">
                                Áo polo
                              </a>
                            </li>
                            <li className="mt-[4px]">
                              <a href="">
                                Áo sơ mi
                              </a>
                            </li>
                            <li className="mt-[4px]">
                              <a href="">
                                Áo nỉ/ sweatshirts
                              </a>
                            </li>
                            <li className="mt-[4px]">
                              <a href="">
                                Áo chui đầu/ hoodie
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="text-left pl-[40px]">
                          <div className="mb-[12px]">
                            ÁO
                          </div>
                          <ul className="*:font-[500] *:text-[#787878]">
                            <li className="mt-[4px]">
                              <a href="">
                                Áo thun
                              </a>
                            </li>
                            <li className="mt-[4px]">
                              <a href="">
                                Áo polo
                              </a>
                            </li>
                            <li className="mt-[4px]">
                              <a href="">
                                Áo sơ mi
                              </a>
                            </li>
                            <li className="mt-[4px]">
                              <a href="">
                                Áo nỉ/ sweatshirts
                              </a>
                            </li>
                            <li className="mt-[4px]">
                              <a href="">
                                Áo chui đầu/ hoodie
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="text-left pl-[40px]">
                          <div className="mb-[12px]">
                            ÁO
                          </div>
                          <ul className="*:font-[500] *:text-[#787878]">
                            <li className="mt-[4px]">
                              <a href="">
                                Áo thun
                              </a>
                            </li>
                            <li className="mt-[4px]">
                              <a href="">
                                Áo polo
                              </a>
                            </li>
                            <li className="mt-[4px]">
                              <a href="">
                                Áo sơ mi
                              </a>
                            </li>
                            <li className="mt-[4px]">
                              <a href="">
                                Áo nỉ/ sweatshirts
                              </a>
                            </li>
                            <li className="mt-[4px]">
                              <a href="">
                                Áo chui đầu/ hoodie
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="text-left pl-[40px]">
                          <div className="mb-[12px]">
                            ÁO
                          </div>
                          <ul className="*:font-[500] *:text-[#787878]">
                            <li className="mt-[4px]">
                              <a href="">
                                Áo thun
                              </a>
                            </li>
                            <li className="mt-[4px]">
                              <a href="">
                                Áo polo
                              </a>
                            </li>
                            <li className="mt-[4px]">
                              <a href="">
                                Áo sơ mi
                              </a>
                            </li>
                            <li className="mt-[4px]">
                              <a href="">
                                Áo nỉ/ sweatshirts
                              </a>
                            </li>
                            <li className="mt-[4px]">
                              <a href="">
                                Áo chui đầu/ hoodie
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="flex flex-col text-left">
                          <a className="mb-[12px]" href="">MLB HEART</a>
                          <a className="mb-[12px]" href="">MLB DENIM</a>

                        </li>
                      </ul>
                      <div className="banner-submenu pl-[45px] ml-[45px] mx-w-[355px] border-l-[1px] border-l-[#eeeeee]">
                        <img className=" ls-is-cached lazyloaded" data-src="https://file.hstatic.net/200000642007/file/quan_ao_95bd9be66a87420b8f5ef12689c994ae.jpg" alt="QUẦN ÁO|APPAREL" width="309" height="309" src="https://file.hstatic.net/200000642007/file/quan_ao_95bd9be66a87420b8f5ef12689c994ae.jpg" />
                      </div>
                    </div>
                  </div>
                </li>


                <li><a className="py-[15px] px-[18px]" href="">MŨ NÓN</a></li>
                <li><a className="py-[15px] px-[18px]" href="">GIÀY DÉP</a></li>
                <li><a className="py-[15px] px-[18px]" href="">TÚI VÍ</a></li>
                <li><a className="py-[15px] px-[18px]" href="">PHỤ KIỆN</a></li>
                <li><a className="py-[15px] px-[18px]" href="">GIẢM GIÁ</a></li>
              </ul>
            </nav>
          </div>

          <div className="ml-auto grid grid-cols-3 grid-rows-1 lg:grid-cols-4">
            <div className="flex items-center">
              <a href="" className='w-[40px] h-[40px] flex justify-center items-center text-center'>
                <img className=" ls-is-cached lazyloaded" src="https://file.hstatic.net/200000642007/file/icon-search_f3577f42c6314038a0636c20100bd8d9.svg" data-src="https://file.hstatic.net/200000642007/file/icon-search_f3577f42c6314038a0636c20100bd8d9.svg" alt="Icon search" width={24} height={24} />
              </a>
            </div>
            <div className="relative flex items-center col-start-3 lg:col-start-2">
              <Link to={`carts/${userId}`} className='w-[40px] h-[40px] flex justify-center items-center text-center'>
                <img className=" ls-is-cached lazyloaded" src="https://file.hstatic.net/200000642007/file/icon-cart_d075fce117f74a07ae7f149d8943fc33.svg" data-src="https://file.hstatic.net/200000642007/file/icon-cart_d075fce117f74a07ae7f149d8943fc33.svg" alt="Icon cart" width={24} height={24} />
              </Link>
              <div className="absolute w-[13px] h-[13px] text-[9px] rounded-[100%] top-[10px] right-[5px] bg-black text-white flex items-center justify-center">4</div>
            </div>
            <div className="items-center hidden lg:flex col-start-2 row-start-1 lg:col-start-3">
              <a href="" className='w-[40px] h-[40px] flex justify-center items-center text-center'>
                <img className=" ls-is-cached lazyloaded" src="	https://file.hstatic.net/200000642007/file/icon-wishlist_86d7262a56ae455fa531e6867655996d.svg" data-src="	https://file.hstatic.net/200000642007/file/icon-wishlist_86d7262a56ae455fa531e6867655996d.svg" alt="Icon cart" width={24} height={24} />
              </a>
            </div>
            <div className="flex items-center col-start-2 row-start-1 lg:col-start-4">
              <a href="" className='w-[40px] h-[40px] flex justify-center items-center text-center'>
                <img className=" ls-is-cached lazyloaded" src="https://file.hstatic.net/200000642007/file/icon-account_5d386c88832c4872b857c0da62a81bbc.svg" data-src="https://file.hstatic.net/200000642007/file/icon-account_5d386c88832c4872b857c0da62a81bbc.svg" alt="Icon account" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
