import './detail.css'
import {useParams} from "react-router-dom";
function Detail() {
    const {id}=useParams().id;
    return (
        <>
            <section className="banner bg-white margin-bottom-20 border-bottom-grey-dark">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 p-0">
                            <img style={{width: "100%", height: "auto"}}
                                 src="https://images.tkbcdn.com/1/1560/600/Upload/eventcover/2023/10/24/D1666B.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="event-info">
                            <div className="event-name text-center">
                                <div className="col-sm-7 col-md-8">
                                    <div
                                        className="calendar-image single-border mobile-invisible padding-left-0 padding-right-0 text-bold">
                                        <p className="month">Tháng 11</p>
                                        <p className="date">05</p>
                                        <p className="day">Chủ nhật</p>
                                    </div>

                                    <div className="event-name-content padding-left-0 padding-right-0">
                                        <div className="col-sm-12">
                                            <h1 className="title grey-dark-color">GENfest - CỔNG ÂM NHẠC ĐA GIÁC
                                                QUAN</h1>
                                        </div>
                                        {/*<div className="button-gr btn-count col-xs-12 col-sm-12 visible-xs">*/}
                                        {/*    <div id="shareBtn3" sharesocial="fbShare" className="col-xs-6 btn-wr">*/}
                                        {/*        <a className="btn-first fshare-button border-grey" target="blank"><i*/}
                                        {/*            className="ello-facebook-squared"></i>Chia sẻ</a>*/}
                                        {/*    </div>*/}

                                        {/*    <div className="dropdown col-xs-6 btn-wr ">*/}
                                        {/*        <a className="follow-event btn-last add-calendar-button border-grey"*/}
                                        {/*           style={{color: "#2DC275"}}>*/}
                                        {/*            <i className="ello-heart-empty" style={{fontWeight: "bold"}}></i>*/}
                                        {/*            Quan tâm*/}
                                        {/*        </a>*/}
                                        {/*        <a className="followed-event btn-last add-calendar-button border-grey"*/}
                                        {/*           style={{color: "#2DC275", display: "none"}}>*/}
                                        {/*            <i className="ello-heart" style={{fontWeight: "bold"}}></i>*/}
                                        {/*            Đã quan tâm*/}
                                        {/*        </a>*/}
                                        {/*    </div>*/}

                                        {/*    <div className="clearfix"></div>*/}
                                        {/*</div>*/}
                                        <div className="button-gr btn-count col-xs-12 col-sm-12 visible-xs"
                                             style={{marginTop: "0px", color: "#606778"}}>
                                        </div>
                                        <div className="cnt-left col-xs-12 col-sm-12 padding-left-0 padding-right-0">
                                            <div className="event-time col-sm-12 pd-hor-15">
                                                <div className="inline-bl">
                                                    <p className="grey-dark-color text-bold text-indent txt-16">
                                                        Chủ nhật, 05 Tháng 11 2023 (09:00 AM - 10:30 PM)
                                                    </p>

                                                </div>

                                                <div className="clear"></div>
                                            </div>
                                            <div className="event-venue border-top-grey col-sm-12 pd-hor-15">

                                                <p className="grey-dark-color text-bold text-indent txt-16">
                                                    The Global City
                                                </p>
                                                <p className="grey-white-color note">Do Xuan Hop Street, An Phu Ward,
                                                    District 2, Thu Duc City</p>
                                            </div>

                                            {/*<a href="#booking"*/}
                                            {/*   className="event-price border-top-grey col-sm-12 pd-hor-15 desktop-invisible page-scroll"*/}
                                            {/*   style={{display: "block"}}>*/}
                                            {/*    <p className="text-indent"><i*/}
                                            {/*        className="ello-ticket icon grey-bright-color"></i>Từ <strong>720.000*/}
                                            {/*        VND</strong></p>*/}
                                            {/*    <i className="ello-right-open grey-bright-color"></i>*/}
                                            {/*    <div className="clear"></div>*/}
                                            {/*</a>*/}
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="button-gr col-sm-5 col-md-4 pl-6 hidden-xs" banner-btn="banner-btn">*/}

                                {/*    <button*/}
                                {/*        className="page-scroll text-center text-bold table-cell button-lg ver-middle btn-booking">*/}
                                {/*        Select showtime*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-100" style={{background: "whitesmoke"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 pr-0 pl-0">
                            <div className="col-md-8 p-3 bg-white mt-2 ">
                                <h3 className="card-title">Giới thiệu</h3>
                                <hr/>
                                <div className="col-xs-12 pos-relative">
                                    <p><strong>GENfest - Cổng âm nhạc đa giác quan</strong>
                                        <span>không chỉ là một lễ hội âm nhạc thông thường, mà còn là một cuộc hành trình tuyệt vời, đặc biệt dành riêng cho thế hệ Gen Z và Millennials tại TP.HCM vào ngày 4 - 5 tháng 11.</span>
                                    </p>
                                    <p><span>Đây là một nền tảng cho các nghệ sĩ trẻ, những người sáng tạo nội dung Việt Nam, để thể hiện và chia sẻ văn hóa và tài năng của họ với toàn thế giới, giới thiệu về những điểm đặc trưng của "culture hub". Đồng thời, GENfest cũng là cơ hội để kết nối và trao đổi với bạn bè quốc tế, góp phần thúc đẩy tiếng nói của thế hệ trẻ Việt Nam trên tầm cỡ toàn cầu.</span>
                                    </p>
                                    <p><span>Tại GENfest, các hoạt động trong một ngày được chia ra 2 phần:</span>
                                    </p>
                                    <p><strong style={{backgroundColor: "rgb(255, 255, 0)"}}>SHINE ON
                                        DAY:</strong><strong>&nbsp;9:00 -
                                        17:00</strong></p>
                                    <p><span>Khán giả sẽ được trải nghiệm hết cỡ với các hoạt động thú vị về Music - Art - Game - Sport - Fair - Fashion Beauty.</span>
                                    </p>
                                    <p><strong style={{backgroundColor: "rgb(255, 255, 0)"}}>BRIGHT ON
                                        STAGE:</strong><strong>&nbsp;17:00
                                        - 22:30</strong>
                                    </p>
                                    <p><span>Khán giả sẽ được quẩy hết mình với các mini concerts mãn nhãn, đã tai đến từ dàn line-up cực khủng mỗi đêm</span>
                                    </p>
                                    <p><strong style={{backgroundColor: "rgb(255, 255, 0)"}}>DAY
                                        1:&nbsp;</strong><span>HuynA - Zico - tlinh - HIEUTHUHAI - LOW G - G-Ducky - Gill</span>
                                    </p>
                                    <p><strong style={{backgroundColor: "rgb(255, 255, 0)"}}>DAY 2:</strong><span> Lee Hyo Ri - Zion.T - B Ray - MONO - GREY D - Pháo - Wren Evans - Obito</span>
                                    </p>
                                    <p><em>Lưu ý: Khung giờ check–in vào khu vực BRIGHT ON STAGE sẽ bắt đầu từ
                                        16h.&nbsp;</em></p>
                                    <div className="w-100"
                                         src="https://static.tkbcdn.com/Upload/agenda/2023/10/25/7F44CD.jpg">
                                        <p><span>Trong một đêm, GENfest sẽ mang đến 7 mini concert từ nghệ sĩ cả trong và ngoài nước, mang lại cho khán giả một trải nghiệm hoàn toàn mới và đích thực về một lễ hội âm nhạc. Hơn nữa, các nghệ sĩ sẽ có cơ hội lần đầu tiên để thể hiện bản sắc của mình trong một buổi trình diễn kéo dài 45 phút. GENfest hi vọng sẽ trở thành cửa ngõ để thế giới khám phá âm nhạc độc đáo và cảm xúc của Việt Nam thông qua thế hệ Nghệ sĩ Gen Z. Đây chắc chắn là một bước quan trọng để âm nhạc Việt được biết đến rộng rãi hơn và thúc đẩy sự kết nối giữa nghệ sĩ Việt và cộng đồng âm nhạc toàn cầu.</span>
                                        </p>
                                        <p><span>Lưu ý và quy định tham gia sự kiện :</span>
                                        </p>
                                        <ul>
                                            <li><span>Giá vé đã bao gồm VAT</span></li>
                                            <li>
                                                <span>Khán giả phải mua vé thông qua kênh bán vé độc quyền Ticketbox.vn</span>
                                            </li>
                                            <li><span>Khán giả mua vé phải đủ 14 tuổi trở lên và có CCCD.</span>
                                            </li>
                                            <li><span>Khi check-in, BTC sẽ yêu cầu khán giả quét mã QR của vé và cung cấp đúng thông tin CCCD để đối soát với thông tin mua vé.</span>
                                            </li>
                                            <li><span>BTC có quyền từ chối với những trường hợp mã QR và thông tin CCCD không khớp với thông tin được điền khi mua vé.</span>
                                            </li>
                                            <li><span>Không mang theo thú cưng.</span>
                                            </li>
                                            <li><span>Không mang vật liệu cháy nổ, chất kích thích, vật sắc nhọn.</span>
                                            </li>
                                            <li><span>Không sử dụng máy ảnh chuyên nghiệp.</span>
                                            </li>
                                            <li><span>Không được livestream, ghi hình các tiết mục trình diễn trên sân khấu</span>
                                            </li>
                                            <li><span>Không xả rác.</span></li>
                                            <li>
                                                <span>Trong mọi tình huống, quyết định của BTC là quyết định cuối cùng.</span>
                                            </li>
                                        </ul>
                                        <p>
                                            <span>--------------------------------------------------------------------------------------------------------------------------------------------------</span>
                                        </p>
                                        <p><span>GENfest is a unique music event created by the soul of Vietnam. It is not just an ordinary music festival; it is a fantastic journey specially crafted for the Gen Z and Millennials in Ho Chi Minh City on 4th &amp; 5th November.</span>
                                        </p>
                                        <p><span>Here, you not only have the opportunity to immerse yourself in music but also to participate in an adventurous exploration, discovering yourself through various artistic experiences, sports, games, and diverse music that the event offers.</span>
                                        </p>
                                        <p><span>At GENfest, one day's activities are divided into 2 parts:</span>
                                        </p>
                                        <p><strong style={{backgroundColor: "rgb(255, 255, 0)"}}>SHINE ON
                                            DAY:</strong><strong>9 A.M - 5
                                            P.M</strong>
                                        </p>
                                        <p>
                                            <span>The audience will experience the full range of exciting activities about Music - Art - Game - Sport - Fair - Fashion &amp; Beauty.</span>
                                        </p>
                                        <p>
                                            <strong style={{backgroundColor: "rgb(255, 255, 0)"}}>BRIGHT ON
                                                STAGE:</strong>
                                            <strong>5
                                                P.M
                                                - 10.30
                                                P.M</strong>
                                        </p>
                                        <p><span>The audience will go all out with eye-catching mini concerts from GENfest artists every night.</span>
                                        </p>
                                        <p><strong style={{backgroundColor: "rgb(255, 255, 0)"}}>DAY 1:</strong><span>HuynA - Zico - tlinh - HIEUTHUHAI - LOW G - G-Ducky - Gill</span>
                                        </p>
                                        <p><strong style={{backgroundColor: "rgb(255, 255, 0)"}}>DAY
                                            2:</strong><span>&nbsp;Lee Hyo Ri - Zion.T - B Ray - MONO - GREY D - Pháo - Wren Evans</span>
                                        </p>
                                        <p><em>Note: Check-in time to the BRIGHT ON STAGE area will start from 4
                                            P.M.</em></p>
                                        <p><span>GENfest is more than just an entertainment playground; it is a platform for young artists, content creators from Vietnam to showcase and share their culture and talent with the world, introducing the distinctive features of the "culture hub." It is also an opportunity to connect and exchange with international friends, contributing to amplifying the voice of Vietnam's young generation globally.</span>
                                        </p>
                                        <p><span>Furthermore, GENfest is a chance to showcase the diversity and unique qualities of Vietnamese music to the world. With the participation of renowned artists, they will have the opportunity to express their uniqueness in a 45-minute performance. In one night, GENfest will present seven mini concerts from both local and international artists, providing the audience with a completely new and authentic music festival experience. GENfest hopes to be a gateway for the world to explore the unique music and emotions of Vietnam through the generation of Gen Z artists. This is undoubtedly an important step for Vietnamese music to be more widely recognized and to promote the connection between Vietnamese artists and the global music community.</span>
                                        </p>
                                        <p><span>Notes and event participation regulations:</span>
                                        </p>
                                        <ul>
                                            <li><span>Ticket prices include VAT.</span>
                                            </li>
                                            <li><span>Audience must purchase tickets through the exclusive ticketing channel Ticketbox.vn.</span>
                                            </li>
                                            <li>
                                                <span>Attendees must be 14 years old or older and have a valid ID card.</span>
                                            </li>
                                            <li><span>During check-in, the event organizers will require attendees to scan the QR code on the ticket and provide accurate ID information for verification against ticket purchase information.</span>
                                            </li>
                                            <li><span>The organizers reserve the right to refuse entry if the QR code and ID information do not match the details provided during ticket purchase.</span>
                                            </li>
                                            <li><span>No pets are allowed.</span>
                                            </li>
                                            <li><span>Prohibited items include explosive materials, stimulants, sharp objects.</span>
                                            </li>
                                            <li><span>Professional cameras are not allowed.</span>
                                            </li>
                                            <li><span>Live streaming and recording of stage performances are not permitted.</span>
                                            </li>
                                            <li><span>No littering.</span>
                                            </li>
                                            <li>
                                                <span>In any situation, the decision of the event organizers is final.</span>
                                                <img className="w-100"
                                                     src="https://static.tkbcdn.com/Upload/agenda/2023/10/08/752DC2.jpg"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;