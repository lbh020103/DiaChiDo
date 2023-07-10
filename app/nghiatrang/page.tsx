import React from "react";
import Image from "next/image";

import img1 from "@/public/assets/nghiatrang/img1.jpg";
import img2 from "@/public/assets/nghiatrang/img2.jpg";
import img3 from "@/public/assets/nghiatrang/img3.jpg";
import img4 from "@/public/assets/nghiatrang/img4.jpg";
import img5 from "@/public/assets/nghiatrang/img5.jpg";
import img6 from "@/public/assets/nghiatrang/img6.jpg";

const page = () => {
  return (
    <div>
      <div className=" flex justify-center ">
        <div className="xl:container flex-col mb-10 lg:px-40 px-5 max-[426px]:px-2 leading-6">
          <h1 className="font-bold flex justify-center py-5 text-3xl">
            GIỚI THIỆU VỀ NGHĨA TRANG LIỆT SỸ XÃ DUY PHƯỚC
          </h1>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <div>
              <p className="font-semibold">
                Nghĩa trang Liệt sỹ xã Duy Phước được xây dựng từ năm 1977, tại
                thôn Lang Châu Bắc, xã Duy Phước, gần Quốc lộ 1A và trên tuyến
                đường Trường Sa. Qua nhiều lần nâng cấp, mở rộng khuôn viên, đến
                thời điểm hiện nay, tổng diện tích là 1,42ha. Đây là nơi yên
                nghĩ của 09 Mẹ Việt Nam Anh Hùng và 522 Anh Hùng Liệt Sỹ là
                những người con của quê hương Duy Phước và những Liệt sỹ ở mọi
                miền Tổ Quốc đến chiến dấu, hy sinh và nằm lại mãi mãi tại địa
                phương.
              </p>
              <br />
            </div>
            <div>
              <Image
                src={img1}
                alt="img1"
                className="xl:flex xl:justify-center h-max w-full"
              />
              <br />
              <span className="italic pb-3 flex justify-center">
                *Hình ảnh nghĩa trang nhìn từ phía trước.
              </span>
            </div>
          </div>

          <p>
            Nghĩa trang Liệt sỹ xã Duy Phước bao gồm các hạng mục công trình
            Tượng đài Tổ quốc ghi công, Phù điêu khắc họa hình ảnh cán bộ, chiến
            sỹ và Nhân dân Duy Phước đứng lên đấu tranh chống lại quân thù thể
            hiện qua các giai đoạn đấu trang giành lại độc lập cho Dân tộc,
            chiến đấu chống quân xâm lược qua 2 thời kỳ chống Pháp và chống Mỹ.
            Đồng thời bức phù điêu làm nổi bậc hình ảnh lao động sản xuất của
            Nhân dân trong công cuộc xây dựng và bảo vệ Tổ quốc.
          </p>
          <br />

          <p>
            Sau bức phù điêu được bố trí 17 dãy mộ các Mẹ Việt Nam Anh Hùng, Anh
            Hùng Liệt sỹ và bồn hoa cây cảnh, lối đi… Phía trước tượng đài là
            cổng và đường vào nghĩa trang, 2 bên được bố trí hồ trồng sen và cây
            xanh quanh hồ. Dự kiến trong thời gian tới địa phương sẽ tiếp tục
            kêu gọi đầu tư để nâng cấp, xây dựng nghĩa trang Liệt sỹ xã Duy
            Phước thêm khang trang, tôn nghiêm… không chỉ là công trình văn hoá
            mà còn trở thành một địa chỉ để giáo dục lý tưởng và đạo lý uống
            nước nhớ nguồn, giáo dục truyền thống cho Nhân dân và đặc biệt là
            thế hệ trẻ của xã nhà.
          </p>
          <br />

          <div className="grid grid-cols-2 gap-5 pb-3 object-contain sm:grid-cols-1 max-[426px]:grid-cols-1">
            <Image
              src={img2}
              alt="img2"
              className="flex justify-center pt-2 w-full object-contain"
            />
            <Image
              src={img3}
              alt="img3"
              className="flex justify-center pt-2 w-full object-contain"
            />
            <Image
              src={img4}
              alt="img4"
              className="flex justify-center pt-2 w-full object-contain"
            />
            <Image
              src={img5}
              alt="img5"
              className="flex justify-center pt-2 w-full object-contain"
            />
            <Image
              src={img6}
              alt="img6"
              className="flex justify-center pt-2 w-full object-contain"
            />
          </div>
          <span className="mb-24 italic flex justify-center">
            Một số hình ảnh về nghĩa trang liệt sĩ xã Duy Phước
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
