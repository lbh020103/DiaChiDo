"use client";

import React, { useEffect } from "react";

import img1 from "@/public/assets/consoc/img1.jpg";
import img2 from "@/public/assets/consoc/img2.jpg";
import img3 from "@/public/assets/consoc/img3.jpg";
import img4 from "@/public/assets/consoc/img4.jpg";
import img5 from "@/public/assets/consoc/img5.jpg";
import img6 from "@/public/assets/consoc/img6.jpg";
import img7 from "@/public/assets/consoc/img7.jpg";
import img8 from "@/public/assets/consoc/img8.jpg";
import img9 from "@/public/assets/consoc/img9.jpg";
import img10 from "@/public/assets/consoc/img10.jpg";
import img11 from "@/public/assets/consoc/img11.jpg";
import img12 from "@/public/assets/consoc/img12.jpg";
import Image from "next/image";

// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";

const ConSoc = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className=" flex justify-center ">
      <div className="xl:container flex-col mb-10 lg:px-40 px-5 max-[426px]:px-2 leading-6">
        <h1
          className="font-bold flex justify-center py-5 text-3xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          DI TÍCH: CHIẾN THẮNG CỒN SÓC
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <div>
            <p className="font-semibold" data-aos="fade-up" data-aos-duration="1000">
              Trên tuyến đường bê tông thẳng tắp xuyên giữa cánh đồng lúa hai
              mùa trĩu hạt, nối liền giữa hai thôn Hòa Bình và Mỹ Phước thuộc xã
              Duy Phước (huyện Duy Xuyên), có một khu vực kiến trúc nhỏ gọn, chỉ
              khoảng 200 m2 , song ý nghĩa khá to lớn đối với lịch sử đấu tranh
              cách mạng của Đảng bộ và nhân dân xã Duy Phước và huyện Duy Xuyên.
              Đó là di tích chiến thắng Cồn Sóc.
            </p>
            <br />
            <p className="pb-3" data-aos="fade-up" data-aos-duration="1000">
              Hằng ngày người dân qua đây thường dừng lại thắp hương tưởng niệm
              các anh hùng liệt sỹ đã hy sinh cho độc lập dân tộc, thống nhất
              đất nước hôm nay. Di tích này đã được Ủy ban nhân dân tỉnh Quảng
              Nam ban hành Quyết định 135/QĐ/UBND/2008 ngày 10/1/2008 xếp hạng
              di tích lịch sử cách mạng cấp tỉnh.
            </p>
            <br />
            <p data-aos="fade-up" data-aos-duration="1000">
              Năm 1966, phong trào cách mạng đã làm cho chế độ của Mỹ - Ngụy
              lung lay. Ở huyện Duy Xuyên, đại hội Đảng bộ huyện lần thứ IV nêu
              cao quyết tâm đánh thắng quân xâm lược Mỹ với phương châm “Hai
              chân, ba mũi giáp công”. Nhiều phong trào như “ Bốn đảm đang”, “
              Ba sẵn sàng”, “ Năm xung phong” của các hội, đoàn thể được phát
              động và hưởng ứng tích cực tạo nên nhiều chiến thắng vang dội, làm
              cho kẻ thù khiếp sự. Nhằm giành lại thế chủ động trên chiến
              trường, địch ráo riết chuẩn bị cho cuộc phản công mùa khô lần thứ
              nhất. Tại vùng Đông Duy Xuyên, địch tổ chức nhiều cuộc càn quét
              quy mô lớn vào vùng giải phóng, đánh chiếm lại những vùng đất đã
              mất từ sau phong trào đồng khởi của ta.
            </p>
          </div>
          <div>
            <Image
              src={img1}
              alt="img1"
              className="xl:flex xl:justify-center h-max w-full"
              data-aos="fade-up" data-aos-duration="1000"
            />
            <br />
            <span
              className="italic pb-3 flex justify-center"
              data-aos-duration="1000"
            >
              Toàn cảnh bia di tích chiến thắng Cồn Sóc
            </span>
          </div>
          <br />
        </div>

        <p data-aos="fade-up" data-aos-duration="1000">
          Ngày 27/2/ năm 1966, địch huy động lính bảo an khoảng trên 100 tên,
          cùng bọn ngụy quyền và đoàn xe bọc thép M114 có máy bay yểm trợ càn
          quét vào xã Xuyên Quang (nay là xã Duy Phước) thực hiện bình định vùng
          giải phóng. Chúng theo hướng tỉnh lộ 610 xuống, đến ngang khu vực xóm
          Lương Hòa là căn cứ của bộ đội và du kích địa phương. Đánh hơi có lực
          lượng ta bên trong, địch dùng hỏa lực, xe bọc thép và máy bay yểm trợ
          tấn công dữ dội nhằm tiêu diệt lực lượng ta, hòng san bằng cả xóm để
          làm mất chỗ dựa của bộ đội và du kích.
        </p>
        <br />

        <p data-aos="fade-up" data-aos-duration="1000">
          Lực lượng ta chỉ có sáu đồng chí du kích địa phương được trang bị súng
          trường, trung liên và lựu đạn. Các đồng chí liền triển khai đội hình
          để đánh địch, giữ vững vùng căn cứ. Nhưng với lực lượng địch đông hơn
          gấp nhiều lần, nên các đồng chí vừa đánh trả vừa rút lui để bảo toàn
          lực lượng và để tránh thiệt hại, tổn thất cho nhân dân. Khi rút lui
          đến rìa xóm thì phát hiện địch bao vây tấn công từ nhiều hướng. Đạn
          pháo địch bắn phá dữ dội, một đồng chí du kích của ta bị thương; các
          đồng chí còn lại bám phòng tuyến quyết định chọn Cồn Sóc có địa hình
          cồn đất nhấp nhô cùng nhiều gò mả cao nằm giữa cánh đồng, cách xa nhà
          dân để bám trụ chiến đấu.
        </p>
        <br />
        <Image
          src={img4}
          alt="img4"
          className="flex justify-center pt-2 w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <span
          className="italic pb-3 flex justify-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          *Hình ảnh minh hoạ
        </span>
        <br />

        <p data-aos="fade-up" data-aos-duration="1000">
          Trận chiến không cân sức giữa sáu chiến sĩ du kích xã Xuyên Quang với
          quân địch tại Cồn Sóc diễn ra khốc liệt từ 9 giờ sáng. Các chiến sĩ du
          kích quyết tâm tử thủ đến cùng; đã mưu trí, dũng cảm đẩy lùi nhiều đợt
          tấn công bằng bộ binh, xe tăng và yểm trợ bằng máy bay của địch. Quân
          địch cũng không dám tấn công ào ạt, vì sợ vướng các bãi mìn của du
          kích. Đến 16 giờ cùng ngày, tất cả sáu chiến sĩ du kích đều lần lượt
          hy sinh. Quân địch cũng thu quân, dừng cuộc càn vì sợ lực lượng bộ đội
          huyện và du kích các xã lân cận phản kích.
        </p>
        <br />
        <p data-aos="fade-up" data-aos-duration="1000">
          Trước khi hy sinh các đồng chí đã bắn rơi một máy bay, phá hủy một xe
          tăng M114 và tiêu diệt hàng chục tên địch, làm cho bọn địch môt phen
          kinh hồn, bớt thói ngang tàng càn quét vào vùng giải phóng.
        </p>
        <br />

        <Image
          src={img6}
          alt="img6"
          className="flex justify-center pt-2 w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <span className="italic pb-3 flex justify-center">
          Bia di tích chiến thắng Cồn Sóc
        </span>
        <br />
        <p data-aos="fade-up" data-aos-duration="1000">
          Sau ngày đất nước thống nhất, vào năm 1977, xã Duy Phước vinh dự được
          Trung ương chọn xây dựng thí điểm mô hình hợp tác xã nông nghiệp để
          rút kinh nghiệm nhân rộng ra toàn tỉnh Quảng Nam - Đà Nẵng (cũ). Cồn
          đất này được san ủi tạo mặt bằng, dẫn thủy nhập điền tạo nên cánh đồng
          lúa năng suất cao, góp phần tăng thu nhập cho người dân.
        </p>
        <br />

        <p data-aos="fade-up" data-aos-duration="1000">
          Dù sáu chiến sỹ du kích xã Xuyên Quang đã hy sinh, nhưng lòng dũng
          cảm, tinh thần yêu nước, quyết tâm đánh đuổi ngoại xâm của các anh vẫn
          sống mãi trong lòng cán bộ, nhân dân xã Duy Phước. Di tích chiến thắng
          Cồn Sóc là địa chỉ đỏ cho các thế hệ thanh, thiếu niên xã Duy Phước
          tìm hiểu, tự hào về thế hệ cha ông, để hun đúc tinh thần cách mạng
          tiến công, ra sức học tập, rèn luyện, góp phần xây dựng quê hương, đất
          nước ngày càng phát triển.
        </p>
        <br />
        <p data-aos="fade-up" data-aos-duration="1000">
          {" "}
          Hiện tại, nơi đây được chọn làm nơi diễn ra lễ kết nạp đoàn viên trên
          địa bàn xã nhà.
        </p>
        <br />

        <Image
          src={img8}
          alt="img8"
          className="flex justify-center pt-2 w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <span
          className="italic pb-3 flex justify-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Lễ kết nạp đoàn viên năm học 2021-2022
        </span>
        <br />

        <div className="grid grid-cols-2 gap-5 pb-3 object-contain sm:grid-cols-1 max-[426px]:grid-cols-1">
          <Image
            src={img9}
            alt="img9"
            className="flex justify-center pt-2 w-full object-contain"
            data-aos="zoom-in"
            data-aos-duration="1000"
          />
          <Image
            src={img10}
            alt="img10"
            className="flex justify-center pt-2 w-full object-contain"
            data-aos="zoom-in"
            data-aos-duration="1000"
          />
          <Image
            src={img11}
            alt="img11"
            className="flex justify-center pt-2 w-full object-contain"
            data-aos="zoom-in"
            data-aos-duration="1000"
          />
          <Image
            src={img12}
            alt="img12"
            className="flex justify-center pt-2 w-full object-contain"
            data-aos="zoom-in"
            data-aos-duration="1000"
          />
        </div>
        <span className="mb-24 italic flex justify-center">
          {" "}
          Một số hình ảnh Cồn Sóc
        </span>
      </div>
    </div>
  );
};

export default ConSoc;
