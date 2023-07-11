'use client'

import React, { useEffect } from "react";

import img1 from "@/public/assets/myduan/img1.jpg";
import img2 from "@/public/assets/myduan/img2.jpg";
import img3 from "@/public/assets/myduan/img3.jpg";
import img4 from "@/public/assets/myduan/img4.jpg";
import img5 from "@/public/assets/myduan/img5.jpg";
import img6 from "@/public/assets/myduan/img6.jpg";
import img7 from "@/public/assets/myduan/img7.jpg";
import Image from "next/image";

// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";

const page = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className=" flex justify-center ">
        <div className="xl:container flex-col mb-10 lg:px-40 px-5 max-[426px]:px-2 leading-6">
          <h1 className="font-bold flex justify-center py-5 text-3xl" data-aos='fade-up' data-aos-duration="1000">
            Di tích: Vụ thảm sát Mỹ Duân
          </h1>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5" >
            <div>
              <p className="font-semibold" data-aos='fade-up' data-aos-duration="1000">
                Xã Duy Phước của huyện Duy Xuyên ngày nay, trong thời kỳ kháng
                chiến chống Mỹ, là địa bàn của hai xã Xuyên Quang và Xuyên Thái.
                Xã Xuyên Quang bao gồm các làng Lang Châu, Gia Tịnh, Câu Lâu, Mỹ
                Duân, Phước Đại. Xã Xuyên Thái bao gồm các làng Triều Châu, Thân
                Lộc, Hà Nhuận, An Phước. Làng Mỹ Duân của xã Xuyên Quang nay
                thuộc thôn Mỹ Phước.
              </p>
              <br />
              <p className="pb-3" data-aos='fade-up' data-aos-duration="1000">
                Làng Mỹ Duân trước đây là nơi đã xảy ra vụ thảm sát tập thể 14
                người dân vô tội do quân Nam Triều Tiên gây ra trong những ngày
                đầu Xuân Mậu Thân 1968.
              </p>
              <br />
            </div>
            <div>
              <Image
                src={img1}
                alt="img1"
                className="xl:flex xl:justify-center h-max w-full"
                data-aos='fade-up' data-aos-duration="1000"
              />
              <br />
              <span className="italic pb-3 flex justify-center" data-aos='fade-up' data-aos-duration="1000">
                Toàn cảnh bia DT Vụ Thảm sát Mỹ Duân
              </span>
            </div>
            <br />
          </div>

          <p data-aos='fade-up' data-aos-duration="1000"> 
            Đầu năm 1967, hai tiểu đoàn quân Nam Triều Tiên vào đóng quân ở Lang
            Châu, Câu Lâu thuộc xã Xuyên Quang. Ban đầu chúng tập trung xây dựng
            công sự, chốt điểm đóng quân và lập trận địa pháo để bắn hỗ trợ cho
            lực lượng càn quét các khu vực có bán kính từ 1.000 đến 1.500 mét
            quanh các chốt điểm. Sau khi ổn định nơi đóng quân, chúng cùng với
            quân ngụy Sài Gòn tổ chức nhiều cuộc càn quét, đánh phá quyết liệt
            vào địa bàn các xã Xuyên Quang, Xuyên Thái, nhất là các xóm ở khu
            vực Câu Lâu, Lang Châu, Triều Châu, Mỹ Duân, An Phước... hòng tiêu
            diệt lực lượng cách mạng trụ bám. Chúng phục kích ở các tuyến đường
            mòn, những điểm nghi ngờ lực lượng ta đi để tiêu diệt bằng mìn
            claymore hoặc vũ khí cá nhân. Với những thủ đoạn trên, quân lính
            địch đã gây ra cho ta nhiều tổn thất về lực lượng, phong trào cách
            mạng ngày càng lâm vào khó khăn.
          </p>
          <br />
          <Image
            src={img2}
            alt="img2"
            className="flex justify-center pt-2 w-full"
            data-aos='fade-up' data-aos-duration="1000"
          />
          <span className="italic pb-3 flex justify-center" data-aos='fade-up' data-aos-duration="1000">
            *Hình ảnh minh hoạ
          </span>

          <br />
          <p data-aos='fade-up' data-aos-duration="1000">
            Trước thực tế tình hình đó, lực lượng bộ đội V25 của tỉnh, bộ đội
            huyện đã tăng cường hỗ trợ cùng du kích các xã Xuyên Quang, Xuyên
            Thái phá thế kìm kẹp của quân địch. Có sự hỗ trợ của cấp trên, cán
            bộ, du kích các xã trong địa bàn đã tiến hành nhiều trận đánh tiêu
            hao, tiêu diệt lực lượng quân lính địch, giành lại thế chủ động trên
            chiến trường.
          </p>

          <p data-aos='fade-up' data-aos-duration="1000">
            Hội nghị Bộ Chính trị tháng 12/1967 và Hội nghị Trung ương lần thứ
            14 tháng 01/1968 đề ra chủ trương động viên sự nỗ lực của toàn Đảng,
            toàn quân, toàn dân nhằm thực hiện chiến dịch Tổng công kích giành
            thắng lợi quyết định trong dịp Xuân Mậu Thân 1968. Theo chỉ đạo của
            Huyện ủy Duy Xuyên, các xã Xuyên Quang, Xuyên Thái đã đẩy mạnh công
            tác tuyên truyền, vận động nhân dân đóng góp nhân tài, vật lực để
            thực hiện. Tại các thôn, nhân dân tự nguyện đóng góp sức người, sức
            của, tích cực tham gia củng cố làng chiến đấu, đào hầm trú ẩn và
            chuẩn bị nơi tiếp nhận thương binh. Thanh niên hăng hái đăng ký tham
            gia lực lượng vũ trang đánh địch.
          </p>

          <br />

          <p data-aos='fade-up' data-aos-duration="1000">
            Quân Nam Triều Tiên đóng tại các xã Xuyên Quang, Xuyên Thái bị tổn
            thất bởi các trận đánh chớp nhoáng của lực lượng cách mạng nhưng
            không ngăn cản được nên vô cùng căm hận, nuôi ý định trả thù. Không
            tiêu diệt được cán bộ, bộ đội, du kích, chúng tàn sát nhân dân để
            lực lượng cách mạng không còn chỗ bám chân để trả đũa. Chúng tiến
            hành nhiều cuộc càn quét, đánh phá, bắn giết, thủ tiêu nhiều người
            dân vô tội, chủ yếu là người già, phụ nữ và trẻ em bằng nhiều thủ
            đoạn hết sức dã man mà khủng khiếp nhất là các vụ thảm sát tập thể.
          </p>
          <br />
          <Image
            src={img3}
            alt="img3"
            className="flex justify-center pt-2 w-full"
            data-aos='fade-up' data-aos-duration="1000"
          />
          <span className="italic pb-3 flex justify-center" data-aos='fade-up' data-aos-duration="1000">
            *Hình ảnh minh hoạ
          </span>
          <br />

          <p data-aos='fade-up' data-aos-duration="1000">
            Một tiểu đoàn quân Rồng Xanh đã xây dựng đồn ở làng Triều Châu, lập
            thêm đồn bên cạnh đồn Liên Đại( Duy Vinh) cùng với hai đồn đã có
            trên địa bàn là Lang Châu, Câu Lâu án ngữ vùng hành lang trên trục
            đường 104. Chúng liên tiếp mở các cuộc càn quét, tìm mọi cách để
            đánh bật lực lượng cách mạng về vùng ven Cây Quýt, giành quyền khống
            chế nhân dân. Máy bay, bom, pháo được tăng cường đánh phá ác liệt
            các thôn, xóm làm cho nhiều người dân phải sơ tán.
          </p>
          <br />
          <Image
            src={img4}
            alt="img4"
            className="flex justify-center pt-2 w-full"
            data-aos='fade-up' data-aos-duration="1000"
          />
          <span className="italic pb-3 flex justify-center" data-aos='fade-up' data-aos-duration="1000">
            *Hình ảnh minh hoạ
          </span>
          <br />

          <p data-aos='fade-up' data-aos-duration="1000">
            Sau cuộc Tổng công kích Xuân Mậu Thân 1968, quân Nam Triều Tiên và
            quân ngụy tăng cường đánh phá vào địa bàn. Theo chỉ đạo của Huyện
            ủy, các xã Xuyên Quang, Xuyên Thái tập trung xây dựng, củng cố và
            phát triển lực lượng du kích mật để hoạt động trong lòng địch, hỗ
            trợ phong trào đấu tranh chính trị của quần chúng. Đội du kích mật
            xã Xuyên Quang được củng cố và phát triển với gần 10 thành viên, lấy
            thôn Lang Châu làm địa điểm hoạt động, tổ chức nhiều trận đánh tập
            kích vào quân Nam Triều Tiên khi chúng càn quét ở các thôn khác.
            Ngay trong trận đầu sau khi thành lập, đội đã lập được chiến công
            xuất sắc, diệt tám tên, làm bị thương 11 tên lính Nam Triều Tiên. Sự
            tổn thất lực lượng càng làm cho quân Nam Triều Tiên căm hận.
          </p>
          <br />

          <p data-aos='fade-up' data-aos-duration="1000">
            Ngày 03/02/1968, quân Nam Triều Tiên đã tổ chức cuộc càn quét vào
            khu vực Xóm Chùa, thôn Mỹ Duân. Do không có sự chuẩn bị trước nên bà
            con nhân dân trong xóm vô cùng hoảng loạn khi chúng đến gần kề. Họ
            tìm nơi trú ẩn tại căn hầm của nhà ông Tâm. Lùng sục khắp nơi phát
            hiện có người trong nhà ông Tâm, lính Nam Triều Tiên liền bắt tất cả
            14 người trói lại, dẫn ra ngoài bãi dương Xóm Chùa rồi xả súng bắn
            chết.
          </p>
          <Image
            src={img5}
            alt="img5"
            className="flex justify-center pt-2 w-full"
            data-aos='fade-up' data-aos-duration="1000"
          />
          <span className="italic pb-3 flex justify-center" data-aos='fade-up' data-aos-duration="1000">
            *Hình ảnh minh hoạ
          </span>
          <br />
          <p data-aos='fade-up' data-aos-duration="1000">
            Hành động tội ác này đã không khuất phục được phong trào cách mạng
            mà lại thổi bùng lên ý chí, lòng căm thù sâu sắc trong cán bộ, đảng
            viên và nhân dân cả xã, cả huyện. Lực lượng du kích Xuyên Quang,
            Xuyên Thái sau đó đã tổ chức nhiều cuộc tập kích, đột nhập để tiêu
            diệt lính Nam Triều Tiên, không cho chúng có điều kiện tiếp tục thực
            hiện những hành vi tội ác.
          </p>
          <br />

          <Image
            src={img6}
            alt="img6"
            className="flex justify-center pt-2 w-full"
            data-aos='fade-up' data-aos-duration="1000"
          />
          <span className="italic pb-3 flex justify-center" data-aos='fade-up' data-aos-duration="1000">
            Tấm bia đá khắc ghi nội dung tại bia DT Vụ thảm sát Mỹ Duân
          </span>
          <p data-aos='fade-up' data-aos-duration="1000">
            Duy Phước ngày nay là một xã nông thôn mới, văn minh và hiện đại.
            Gác lại quá khứ để hướng đến tương lai nhưng những mất mát đau
            thương một thời vẫn cứ âm ỉ rỉ máu trong trái tim các thân nhân của
            những người bị thảm sát năm ấy. Điều đáng tiếc là bãi dương Xóm Chùa
            ngày đó nay không còn nữa. Sức tàn phá của thiên nhiên đã biến bãi
            dương thành một ao nước cạn.
          </p>
          <br />

          <p data-aos='fade-up' data-aos-duration="1000">
            Vụ thảm sát tại Xóm Chùa, làng Mỹ Duân đã đi qua 50 năm nhưng những
            mất mát, đau thương, tang tóc cho đến nay vẫn chưa thể xóa nhòa
            trong tâm trí của nhiều người dân các xã Xuyên Quang, Xuyên Thái
            thời ấy. Thật khó có thể xoa dịu nỗi đau trong từng gia đình, dòng
            tộc của người dân làng Mỹ Duân hôm nay và mai sau. Ngày 10/01/2008,
            Uỷ ban nhân dân tỉnh Quảng Nam đã ban hành Quyết định số
            135/QĐ/UBND/2008 xếp hạng Vụ thảm sát Mỹ Duân là Di tích lịch sử cấp
            tỉnh.
          </p>
          <br />

          <Image
            src={img7}
            alt="img7"
            className="flex justify-center pt-2 w-full"
            data-aos='fade-up' data-aos-duration="1000"
          />
          <span className="italic mb-16 flex justify-center" data-aos='fade-up' data-aos-duration="1000"> 
            Ngày khởi công xây dựng công trình di tích
          </span>
          <br />
        </div>
      </div>
    </div>
  );
};

export default page;
