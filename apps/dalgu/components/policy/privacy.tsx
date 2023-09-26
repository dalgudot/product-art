import style from './policy.module.css'; // 추후 수정

type PrivacyProps = {
  appName:
    | 'YoonSeul'
    | 'Today To Do'
    | 'Plant Family'
    | 'Reminder'
    | 'Calendar';
  contactEmail:
    | 'yoonseul.app@gmail.com'
    | 'todaytodo.application@gmail.com'
    | 'plant.family.app@gmail.com'
    | 'reminder.dalgu.app@gmail.com'
    | 'calendar.dalgu.app@gmail.com';
};

export default function Privacy({ appName, contactEmail }: PrivacyProps) {
  const description1_1 = `This application does not collect, use, save, or have access to any of your personal data recorded in ${appName}. Texts, photos, and date data stored in the ${appName} app are only saved on your device and your iCloud.`;
  const description1_2 =
    (appName === 'YoonSeul' || appName === 'Plant Family') && // Today To Do에서는 사진 라이브러리 접근 안 함.
    `You might also be asked to provide access to your photo library, but this is to save the photos taken by ${appName} Application in your photo library. This application doesn’t process that information at all.`;

  const description2 =
    'This application doesn’t collect personal information from anyone, including children under the age of 13.';

  return (
    <main className={style.main}>
      <h1>{appName} Privacy Policy</h1>

      <section className={style.section}>
        <h2>Overview</h2>
        <p>
          This Privacy Policy describes how your personal information is handled
          in {appName} Application.
        </p>

        <h2>{appName} Does Not Collect Personal Information</h2>
        <p>
          {description1_1} {description1_2}
        </p>

        <h2>
          {appName} Comply with the Children’s Online Privacy Protection Act
        </h2>
        <p>{description2}</p>

        <h2>Contact Me</h2>
        <p>
          If you have any questions or suggestions about this Privacy Policy, do
          not hesitate to contact me at{' '}
          <a href={`mailto:${contactEmail}`} target='_blank' rel='noreferrer'>
            {contactEmail}
          </a>
        </p>

        <p className={style.lasest__update}>Latest Update: Sep 26, 2023</p>
      </section>
    </main>
  );
}
