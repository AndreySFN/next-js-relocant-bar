export const YandexMapReview = () =>
    <div style={{
        width: '50%',
        height: '800px',
        overflow: 'hidden',
        position: 'relative'
    }}>
        <iframe
            style={{
                width: '100%',
                height: '100%',
                border: '1px solid #e6e6e6',
                borderRadius: '8px',
                boxSizing: 'border-box'
            }}
            src="https://yandex.ru/maps-reviews-widget/147145053570?comments"/>
        <a
            href="https://yandex.ru/maps/org/relokant/147145053570/"
            target="_blank"
            style={{
                boxSizing: 'border-box',
                textDecoration: 'none',
                color: '#b3b3b3',
                fontSize: '10px',
                fontFamily: 'YS Text; sans-serif',
                padding: '0 20px',
                position: 'absolute',
                bottom: '8px',
                width: '100%',
                textAlign: 'center',
                left: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: 'block',
                maxHeight: '14px',
                whiteSpace: 'nowrap',
            }}>Релокантъ
            на карте Еревана — Яндекс Карты</a>
    </div>
