"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import img1 from "@/public/assets/hamhan/img1.png";
import img2 from "@/public/assets/hamhan/img2.jpg";
import img3 from "@/public/assets/hamhan/img3.jpg";
import img4 from "@/public/assets/hamhan/img4.jpg";
import img5 from "@/public/assets/hamhan/img5.jpg";
import img6 from "@/public/assets/hamhan/img6.jpg";
import img7 from "@/public/assets/hamhan/img7.jpg";
import img8 from "@/public/assets/hamhan/img8.jpg";

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
        <div className="xl:container flex-col mb-10 lg:px-40 px-5 max-[426px]:px-2 leading-6" >
          <h1 className="font-bold flex justify-center py-5 text-3xl" data-aos='fade-up' data-aos-duration="1000">
            Di tích: Sự kiện hầm Hấn
          </h1>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5" >
            <div data-aos='fade-up' data-aos-duration="1000">
              <p className="font-semibold" >
                Năm 1954, sau hiệp định Genève, một số cán bộ của ta được phân
                công ở lại đấu tranh với địch. Để đảm bảo cho cán bộ hoạt động,
                nhân dân xóm lẻ vùng 7 thôn Lang Châu, xã Xuyên Quang đã đào hầm
                bí mật nuôi giấu cán bộ. Nơi đây trở thành địa điểm hoạt động
                chỉ đạo phong trào của cán bộ huyện ủy, tỉnh ủy và các xã khu
                Đông.
              </p>
              <br />
            </div>
            <div data-aos='fade-up' data-aos-duration="1000">
              <Image
                src={img1}
                alt="img1"
                className="xl:flex xl:justify-center h-max w-full"
              />
              <br />
              <span className="italic pb-3 flex justify-center">
                Địa điểm Di tích sự kiện hầm Hấn
              </span>
            </div>
          </div>

          <p data-aos='fade-up' data-aos-duration="1000">
            Năm 1964, phong trào cách mạng phát triển mạnh và rộng khắp các địa
            phương, trong đó có các xã khu Đông huyện Duy Xuyên nhằm thực hiện
            chủ trương của Tỉnh ủy Quảng Đà và Huyện ủy Duy Xuyên về vận động
            lực lượng quần chúng nổi dậy kết hợp cùng lực lượng vũ trang đẩy
            mạnh tấn công địch bằng “hai chân, ba mũi giáp công”. Với sự hỗ trợ
            của bộ đội huyện, các cơ sở cách mạng hợp pháp ở Xuyên Quang, Xuyên
            Thái cùng với các đoàn thể vận động nhân dân cung cấp tình hình,
            phục vụ cho lực lượng vũ trang huyện tấn công tiêu diệt chốt điểm
            của địch tại cầu Câu Lâu, hai lần đánh vào cơ quan Hội đồng xã Xuyên
            Quang, đốt trụ sở, phá tan bốt gác tại Cồn Mèo, diệt hai trung đội
            bảo an và nhiều tên trong bộ máy tề xã ngụy quyền, tổ chức mít tinh,
            rải truyền đơn tuyên truyền, treo cờ Mặt trận Giải phóng miền Nam
            gây thanh thế.
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
            Địch điên cuồng tìm mọi cách để dập tắt phong trào cách mạng nơi
            đây. Chúng ra sức bắt bớ đánh đập, buộc nhân dân phải chỉ nơi trú ẩn
            của các đồng chí cán bộ của ta, nhưng cơ sở và các người thân trong
            gia đình đều trung kiên không khai báo. Họ tìm mọi cách để bảo vệ
            cán bộ, bảo vệ cách mạng.
          </p>

          <br />

          <p data-aos='fade-up' data-aos-duration="1000"> 
            Thực hiện chủ trương đồng khởi của Ban Thường vụ Khu ủy Khu V và sự
            chỉ đạo của cấp trên, đêm 9/6/1964, các đồng chí Huyện ủy phụ trách
            khu Đông triệu tập cuộc họp gồm bí thư các xã trong vùng tại nhà ông
            Trương Kiện - cơ sở cách mạng tại vùng 7, là xóm lẻ của thôn Lang
            Châu, xã Xuyên Quang kiểm tra việc chuẩn bị đồng khởi giành chính
            quyền về tay nhân dân. Cuộc họp kết thúc trong đêm, bí thư chi bộ
            các xã đã ra về. Rạng sáng ngày 10/6/1964, bọn địch gồm hai trung
            đội lính, mật vụ, dân vệ cùng xe cơ giới lùng sục tìm hầm bí mật
            trong khu vực này. Chúng đi cùng hai tên chiêu hồi tìm hầm bí mật
            khắp nơi.
          </p>

          <br />

          <p data-aos='fade-up' data-aos-duration="1000">
            Khi đến nhà ông Trương Kiện, nơi có hầm bà Hấn (bà Hấn là con gái
            của ông Trương Kiện), thấy có dấu hiệu khả nghi, chúng liền triển
            khai lực lượng tìm hầm. Đến chuồng trâu, chúng yêu cầu thả trâu ra
            nhưng cô Trương Thị Hiểu, cháu gọi ông Trương Kiện là chú, quyết giữ
            chặt mũi trâu không cho chúng vào. Cô biết nắp hầm nằm ngay ở máng
            ăn của trâu, nếu để chúng vào thì sẽ bị lộ, rất nguy hiểm cho cán bộ
            ta đang ở dưới hầm. Bọn chúng liền xả súng bắn chết cô Hiểu. Một tên
            lính khác xông lên giằng lấy mũi trâu thì bị trâu chống trả quyết
            liệt làm bị thương. Thấy hầm có nguy cơ bị lộ, hai đồng chí Dương
            Hối và Nguyễn Thành Văn nhảy lên khỏi hầm, dùng súng và lựu đạn
            quyết tử cùng bọn chúng. Do địch quá đông nên hai đồng chí đã anh
            dũng hy sinh.
          </p>
          <br />

          <p data-aos='fade-up' data-aos-duration="1000">
            Từ đó, chúng tiếp tục phát hiện ra hai hầm của ông Trương Cáo và
            Đặng Điệp, vì thế các đồng chí trong hầm đều phải nhảy ra khỏi hầm
            để chiến đấu chống lại. Hai đồng chí hy sinh, riêng đồng chí Nguyễn
            Văn Môn bị chúng bắt. Ông Trương Cáo và Trương Kiện bị chúng bắn bị
            thương nhưng đã thừa cơ thoát khỏi nanh vuốt của kẻ thù.
          </p>
          <br />

          <p data-aos='fade-up' data-aos-duration="1000">
            Sự hy sinh dũng cảm của các đồng chí cán bộ huyện và cô Trương Thị
            Hiểu đã để lại niềm thương tiếc và kính phục trong lòng nhân dân các
            xã Xuyên Quang, Xuyên Thái (nay là xã Duy Phước) và nhân dân toàn
            huyện.{" "}
          </p>
          <br />

          <Image
            src={img3}
            alt="img3"
            className="flex justify-center pt-2 w-full"
            data-aos='fade-up' data-aos-duration="1000"
          />
          <span className="italic pb-3 flex justify-center" data-aos='fade-up' data-aos-duration="1000">
            Địa điểm Di tích sự kiệm hầm Hấn
          </span>
          <br />

          <p data-aos='fade-up' data-aos-duration="1000">
            Di tích sự kiện hầm Hấn đã được Uỷ ban nhân dân tỉnh Quảng Nam ban
            hành Quyết định số: 135/QĐ/UBND, ngày 10/01/2008, xếp hạng di tích
            lịch sử cấp tỉnh
          </p>
          <br />

          <div className="grid grid-cols-2 gap-5 pb-3 object-contain sm:grid-cols-1 max-[426px]:grid-cols-1">
            <Image
              src={img4}
              alt="img4"
              className="flex justify-center pt-2 w-full object-contain"
              data-aos='zoom-in' data-aos-duration="1000"
            />
            <Image
              src={img5}
              alt="img5"
              className="flex justify-center pt-2 w-full object-contain"
              data-aos='zoom-in' data-aos-duration="1000"
            />
            <Image
              src={img7}
              alt="img7"
              className="flex justify-center pt-2 w-full object-contain"
              data-aos='zoom-in' data-aos-duration="1000"
            />
            <Image
              src={img8}
              alt="img8"
              className="flex justify-center pt-2 w-full object-contain"
              data-aos='zoom-in' data-aos-duration="1000"
            />
          </div>
          <span className="mb-24 italic flex justify-center" data-aos='fade-up' data-aos-duration="1000">
            {" "}
            Một số hình ảnh Hầm Hấn
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
