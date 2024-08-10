import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { message } from 'antd'
import axios from 'axios'
import { Link } from 'lucide-react'
import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const CartPage = (props: Props) => {

    const [messageApi, contextHolder] = message.useMessage()
    const { userId } = useParams()
    const queryClient = useQueryClient()

    const { data: carts } = useQuery({
        queryKey: ['carts', userId],
        queryFn: () => {
            return axios.get(`http://localhost:8080/api/carts/${userId}`)
        }
    })

    const { mutate } = useMutation({
        mutationFn: async (colorId: string) => {
            try {
                axios.post(`http://localhost:8080/api/carts/remove`, {userId, colorId})
            } catch (error) {
                throw new Error(`Có lỗi xảy ra, xin thử lại sau`)
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: 'success',
                content: 'Xóa thành công',
            }),
            queryClient.invalidateQueries({
                queryKey: ['carts', userId]
            });
        },
        onError: (error) => {
            messageApi.open({
                type: 'error',
                content: error.message,
            })
        }
    })

    return (
        <main>
            {contextHolder}
            <div className="lg:max-w-[1270px] lg:mx-auto lg:px-[15px] lg:mt-[40px]">
                <div className="flex w-[100%] mb-[16px]">
                    <div className="*:text-[12px] *:font-[500] hidden lg:block">
                        <span className='text-[#787878]'>DANH MUC {'>'} </span>
                        <span className='text-[#787878]'>TRANG CHU {'>'} </span>
                        <span>QUAN AO</span>
                    </div>
                </div>

                <div className="lg:flex lg:flex-wrap lg:items-start ">
                    <div className="lg:w-[70%]">



                        <div className="px-[20px] py-[14px] mb-[24px] flex items-center border-t-[1px] border-b-[1px] border-t-[#E8E8E8] border-b[#E8E8E8] mt-[2px] lg:border-t-0">
                            <input className='mr-[8px] w-[20px] h-[20px]' type="checkbox" />
                            <span className='text-[14px] font-[600]'>Chọn tất cả</span>
                        </div>


                        {carts?.data?.products?.map((cart: any, index: any) => (
                            <div key={index + 1} className="px-[20px]">
                                <div className="flex flex-wrap items-center justify-between mt-[24px] lg:justify-between lg:flex-nowrap">
                                    <div className='flex items-start w-[100%]'>
                                        <div className="w-[120px]">
                                            <input className='absolute w-[20px] h-[20px]' type="checkbox" />
                                            <div className="pt-[123.5%] bg-cover bg-center bg-no-repeat"
                                                style={{ backgroundImage: `url(${cart.color})`, }}
                                            ></div>
                                        </div>

                                        <div className='w-[calc(100%-120px)]'>
                                            <div className="pl-[16px]">
                                                <div className="leading-5">
                                                    <a href="#" className='text-black hover:underline text-[14px] font-[600] w-[100%]'>
                                                        {cart.name}
                                                    </a>
                                                </div>
                                                <div className='text-[12px] text-black font-[500] my-[4px]'>43BKS / {cart.size} / {cart.slug}</div>
                                                <div className='text-[12px] text-black font-[500]'>Số lượng: {cart.quantity}</div>
                                                <div className='mt-[24px] *:text-[16px] font-[700]'>
                                                    <span>{cart.price} VND</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:hidden">
                                            <a href="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"> <path d="M13.9998 6L5.99988 14" stroke="black" stroke-linecap="square" stroke-linejoin="round"></path> <path d="M6 6L13.9999 14" stroke="black" stroke-linecap="square" stroke-linejoin="round"></path> </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center mt-[20px] w-[100%] lg:w-[156.5px] lg:flex-wrap *:font-[500] lg:mt-0">
                                        <a href="" className='w-[100%] text-center border border-[#E8E8E8] rounded-[3px] text-[14px] py-[6px] px-[8px] '>Thay đổi tùy chọn</a>
                                        <button onClick={() => {mutate(cart.colorId)}} className='hidden w-full text-center border border-[#E8E8E8] rounded-[3px] text-[14px] py-[6px] px-[8px] mt-[8px] lg:block'>Xóa</button>
                                    </div>
                                </div>



                            </div>
                        ))}

                    </div>

                    <div className='mt-[32px] lg:w-[30%] lg:pl-[32px] lg:mt-0 lg:sticky top-0'>
                        <div className='p-[20px] border-t-[8px] border-t-[#F8F8F8] border-b-[8px] border-b-[#F8F8F8] lg:border-[#E8E8E8] lg:border-[2px] lg:rounded-[8px_8px_0_0] lg:py-[20px] lg:px-[24px]'>
                            <h2 className='font-[700] text-[18px] mb-[20px]'>THÔNG TIN ĐƠN HÀNG</h2>
                            <div className='flex justify-between text-[14px] font-[500]'>
                                <span className=''>Tạm tính</span>
                                <span>1,690,000₫</span>
                            </div>
                            <div className='flex justify-between mt-[12px] text-[14px] font-[500]'>
                                <span>Phí vận chuyển</span>
                                <span>-</span>
                            </div>
                            <div className='flex justify-between pt-[16px] mt-[16px]  border-t-[2px] border-t-black *:text-[16px] *:font-[700]'>
                                <span>Tổng đơn hàng</span>
                                <span>1,690,000₫</span>
                            </div>

                        </div>
                        <button className='bg-black text-white text-[16px] font-[600] w-full fixed bottom-0 h-[56px] -tracking-wide lg:static lg:rounded-[0_0_8px_8px]'>
                            THANH TOÁN
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CartPage
