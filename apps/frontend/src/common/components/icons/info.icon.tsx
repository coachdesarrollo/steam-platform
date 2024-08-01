export type InfoIconProps = {
  fill?: string;
  className?: string;
};

export function InfoIcon({ className, fill = "currentColor" }: InfoIconProps) {
  return (
    <svg className={className} fill={fill} viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5417 30.2917H22.4584V18.5417H18.5417V30.2917ZM20.5001 14.6251C21.0549 14.6251 21.5204 14.4371 21.8964 14.0611C22.2724 13.6851 22.4597 13.2203 22.4584 12.6667C22.4571 12.1132 22.2691 11.6484 21.8944 11.2724C21.5197 10.8964 21.0549 10.7084 20.5001 10.7084C19.9452 10.7084 19.4804 10.8964 19.1058 11.2724C18.7311 11.6484 18.5431 12.1132 18.5417 12.6667C18.5404 13.2203 18.7284 13.6857 19.1058 14.063C19.4831 14.4403 19.9478 14.6277 20.5001 14.6251ZM20.5001 40.0834C17.7911 40.0834 15.2452 39.569 12.8626 38.5402C10.4799 37.5115 8.40738 36.1165 6.64488 34.3553C4.88238 32.5941 3.48739 30.5215 2.45992 28.1376C1.43245 25.7536 0.918056 23.2078 0.916751 20.5001C0.915445 17.7924 1.42983 15.2465 2.45992 12.8626C3.49 10.4786 4.88499 8.40607 6.64488 6.64487C8.40476 4.88368 10.4773 3.48869 12.8626 2.45991C15.2478 1.43114 17.7937 0.916748 20.5001 0.916748C23.2065 0.916748 25.7523 1.43114 28.1376 2.45991C30.5228 3.48869 32.5954 4.88368 34.3553 6.64487C36.1152 8.40607 37.5108 10.4786 38.5422 12.8626C39.5736 15.2465 40.0873 17.7924 40.0834 20.5001C40.0795 23.2078 39.5651 25.7536 38.5403 28.1376C37.5154 30.5215 36.1204 32.5941 34.3553 34.3553C32.5902 36.1165 30.5176 37.5121 28.1376 38.5422C25.7576 39.5723 23.2117 40.086 20.5001 40.0834ZM20.5001 36.1667C24.8737 36.1667 28.5782 34.649 31.6136 31.6136C34.649 28.5782 36.1668 24.8737 36.1668 20.5001C36.1668 16.1265 34.649 12.422 31.6136 9.38654C28.5782 6.35112 24.8737 4.83341 20.5001 4.83341C16.1265 4.83341 12.422 6.35112 9.38654 9.38654C6.35113 12.422 4.83342 16.1265 4.83342 20.5001C4.83342 24.8737 6.35113 28.5782 9.38654 31.6136C12.422 34.649 16.1265 36.1667 20.5001 36.1667Z" />
    </svg>
  );
}
