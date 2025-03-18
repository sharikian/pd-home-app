import { VerticalQuiz } from "./components/VerticalQuiz";
import { GreenBlood } from "@/public/icons";

const ICIQ = () => {
    const items = [
        {
            title: 'چند وقت یکبار نشت ادرار دارید؟ (یک کادر را علامت بزنید)',
            items: [
                'هرگز', 'حدود یک بار در هفته یا کمتر',
                'دو یا سه بار در هفته', 'حدود یک بار در روز',
                'چندین بار در روز', 'تمام وقت'
            ]
        },
        {
            title: 'معمولاً چه مقدار ادرار نشت می کند (چه محافظ استفاده کنید یا نه)؟ (یک کادر را علامت بزنید)',
            items: [
                'هیچی', 'مقدار کمی',
                'مقدار متوسط', 'مقدار زیادی'
            ]
        }
      ];
    return (
        <VerticalQuiz title="ICIQ-UI" items={items} icon={GreenBlood} />
    )
}

export default ICIQ;
