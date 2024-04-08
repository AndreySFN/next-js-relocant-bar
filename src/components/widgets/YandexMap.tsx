import React from "react";
import styled from "styled-components";
import {IMobileProps} from "@src/types";

const MapContainer = styled.div<IMobileProps>`
  position: relative;
  overflow: hidden;
  width:  ${(props) => (props.isMobile ? '100%' : '49%')};
  a {
    color: #eee;
    font-size: 12px;
    position: absolute;
    top: 0;
    text-decoration: none;

    &:last-child {
      top: 14px;
    }
  }

  iframe {
    position: relative;
  }
`;

export const YandexMap: React.FC<IMobileProps> = ({isMobile}: IMobileProps) => {
    return (
        <MapContainer isMobile={isMobile}>
            <a
                href="https://yandex.ru/maps/org/relokant/147145053570/?utm_medium=mapframe&utm_source=maps"
                target="_blank"
                rel="noopener noreferrer"
            >
                Релокантъ
            </a>
            <a
                href="https://yandex.ru/maps/10262/yerevan/category/bar_pub/184106384/?utm_medium=mapframe&utm_source=maps"
                target="_blank"
                rel="noopener noreferrer"
            >
                Бар, паб в Ереване
            </a>
            <iframe
                src="https://yandex.ru/map-widget/v1/?ll=44.516310%2C40.173832&mode=search&oid=147145053570&ol=biz&sctx=ZAAAAAgBEAAaKAoSCRpPBHEeQkZAEbmoFhHFFkRAEhIJ09heC3pvsD8RkwILYMrAqT8iBgABAgMEBSgKOABAllBIAWIhbWlkZGxlX3Bvc3RmaWx0ZXJfdGhyZXNoY2hhaW49MC41YiJtaWRkbGVfcG9zdGZpbHRlcl90aHJlc2hjaGFpbj0wLjQ1YhxtaWRkbGVfcG9zdGZpbHRlcl90aHJlc2g9MC41Yh1taWRkbGVfcG9zdGZpbHRlcl90aHJlc2g9MC40NWIucmVsZXZfcmFua2luZ19tc2VfZm9ybXVsYT0xLjA6bXNlX2RjMzI4NDEyX2V4cGIucmVsZXZfcmFua2luZ19tc2VfZm9ybXVsYT0xLjA6bXNlX2RjMzM5NDQzX2V4cGJQcmVhcnI9c2NoZW1lX0xvY2FsL0dlby9CdXNHZW9DaG9vc2UvVGFrZVJ1YnJpY0ZpcnN0U2FtZUJ5UmVzdWx0c01zZVRocmVzaG9sZD0wLjViUXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vQnVzR2VvQ2hvb3NlL1Rha2VSdWJyaWNGaXJzdFNhbWVCeVJlc3VsdHNNc2VUaHJlc2hvbGQ9MC40NWoCYW2dAc3MTD2gAQCoAQC9AUvUxMHCAQaCq52UpATqAQDyAQD4AQCCAhDQoNC10LvQvtC60LDQvdGCigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=44.516310%2C40.173832&source=serp_navig&sspn=0.008483%2C0.006646&text=%D0%A0%D0%B5%D0%BB%D0%BE%D0%BA%D0%B0%D0%BD%D1%82&z=16.92"
                width="100%"
                height="400"
                frameBorder="1"
                allowFullScreen
            ></iframe>
        </MapContainer>
    );
};
