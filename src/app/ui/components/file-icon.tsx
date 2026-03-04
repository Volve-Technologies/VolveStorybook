import { HugeiconsIcon } from '@hugeicons/react';
import { Icons } from './icons';
import { File01Icon } from '@hugeicons/core-free-icons';

type FileIconProps = {
  fileName: string;
  className?: string;
};

function getFileExtension(fileName: string): string {
  const lastDotIndex = fileName.lastIndexOf('.');
  if (lastDotIndex === -1) return '';
  return fileName.slice(lastDotIndex + 1).toLowerCase();
}

export function FileIcon({ fileName, className }: FileIconProps) {
  const extension = getFileExtension(fileName);

  switch (extension) {
    case 'pdf':
      return <Icons.pdf className={className} />;
    case 'doc':
    case 'docx':
      return <Icons.docx className={className} />;
    case 'xls':
    case 'xlsx':
      return <Icons.xlsx className={className} />;
    case 'csv':
      return <HugeiconsIcon icon={File01Icon} className={className} />;
    case 'ppt':
    case 'pptx':
      return <HugeiconsIcon icon={File01Icon} className={className} />;
    case 'sppkg': // SharePoint Framework Package
    case 'wsp': // Web Solution Package
    case 'app': // SharePoint Add-in
    case 'aspx': // Web Page
    case 'master': // Master Page
    case 'stp': // Site Template
      return <Icons.sharepoint className={className} />;
    default:
      return <HugeiconsIcon icon={File01Icon} className={className} />;
  }
}

export function FileIconsStack() {
  return (
    <div className="flex ml-1">
      <FileIcon fileName=".docx" className="size-4 -ml-2" />
      <FileIcon fileName=".pdf" className="size-4 -ml-2" />
      <svg
        className="size-4 -ml-2"
        width="11"
        height="12"
        viewBox="0 0 11 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.90005 3.92012H8.52505C8.0702 3.92012 7.70005 3.54324 7.70005 3.08012V1.12012H3.30005V10.0801H9.90005V3.92012Z"
          fill="white"
        />
        <path
          d="M9.9 3.35995V3.19587L8.25 1.51587V3.07995C8.25 3.23395 8.37375 3.35995 8.525 3.35995H9.9Z"
          fill="white"
        />
        <path
          opacity="0.67"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.2888 2.80006L8.25 0.724139C8.14688 0.619111 8.00701 0.56009 7.86115 0.560059H3.3C2.99624 0.560059 2.75 0.810779 2.75 1.12006V10.0801C2.75 10.3893 2.99624 10.6401 3.3 10.6401H9.9C10.2038 10.6401 10.45 10.3893 10.45 10.0801V3.19598C10.45 3.04747 10.392 2.90505 10.2888 2.80006ZM9.9 3.19598V3.36006H8.525C8.37325 3.35975 8.2503 3.23457 8.25 3.08006V1.51598L9.9 3.19598ZM3.3 1.23206V9.96806C3.3 10.0299 3.34925 10.0801 3.41 10.0801H9.79C9.85075 10.0801 9.9 10.0299 9.9 9.96806V3.92006H8.525C8.06937 3.92006 7.7 3.54398 7.7 3.08006V1.12006H3.41C3.3495 1.12006 3.3 1.17046 3.3 1.23206Z"
          fill="#605E5C"
        />
        <path
          d="M4.94995 8.9599H9.07495C9.22683 8.9599 9.34995 8.83454 9.34995 8.6799C9.34995 8.52526 9.22683 8.3999 9.07495 8.3999H4.94995V8.9599Z"
          fill="#C8C6C4"
        />
        <path
          d="M8.80005 4.47998H6.05005V7.83998H8.80005C9.10365 7.83998 9.35005 7.53926 9.35005 7.16798V5.15198C9.35005 4.7807 9.10365 4.47998 8.80005 4.47998Z"
          fill="#81C8C3"
        />
        <path
          d="M1.10005 8.96011H5.50005C5.80381 8.96011 6.05005 8.70939 6.05005 8.40011V3.92011C6.05005 3.61083 5.80381 3.36011 5.50005 3.36011H1.10005C0.796292 3.36011 0.550049 3.61083 0.550049 3.92011V8.40011C0.550049 8.70939 0.796292 8.96011 1.10005 8.96011Z"
          fill="#03787C"
        />
        <path
          d="M2.55471 6.09278C2.44647 6.01755 2.35655 5.91815 2.29181 5.80214C2.22818 5.67983 2.19655 5.5429 2.19996 5.40454C2.19996 5.20014 2.25661 5.02822 2.37046 4.88934C2.48376 4.7499 2.63446 4.64742 2.82311 4.58022C3.01176 4.51358 3.21801 4.47998 3.44296 4.47998C3.78616 4.47998 4.05841 4.51974 4.25806 4.59926V5.20238C4.1444 5.1297 4.01997 5.07619 3.88956 5.0439C3.74858 5.00778 3.60373 4.98972 3.45836 4.99014C3.27961 4.99014 3.13221 5.02318 3.01506 5.08814C2.89736 5.1531 2.83906 5.24606 2.83906 5.36646C2.83906 5.4415 2.86381 5.50758 2.91331 5.56414C2.96281 5.62014 3.02991 5.67054 3.11406 5.71366C3.25504 5.78428 3.3985 5.84966 3.54416 5.90966C3.74106 5.99422 3.89946 6.07542 4.01881 6.15494C4.13816 6.23334 4.23166 6.3319 4.29931 6.45006C4.36696 6.56766 4.40051 6.71662 4.40051 6.89582C4.40051 7.11534 4.34716 7.29398 4.24101 7.4323C4.13093 7.57328 3.98218 7.67776 3.81366 7.73246C3.63546 7.79406 3.43251 7.82486 3.20536 7.82486C3.01121 7.82486 2.82751 7.80862 2.65426 7.77726C2.50021 7.75167 2.34996 7.70632 2.20711 7.6423V7.00558C2.32921 7.09966 2.47991 7.17526 2.65976 7.23014C2.83961 7.28614 3.00571 7.31414 3.15806 7.31414C3.35826 7.31414 3.50841 7.28054 3.61016 7.2139C3.70739 7.15437 3.76544 7.046 3.76196 6.93054C3.76281 6.84966 3.73216 6.77174 3.67671 6.71382C3.60845 6.64365 3.52905 6.58572 3.44186 6.54246C3.34176 6.49038 3.19436 6.42094 2.99856 6.33526C2.84312 6.26989 2.6946 6.18865 2.55526 6.09278H2.55471Z"
          fill="#F9F7F7"
        />
      </svg>

      <FileIcon fileName=".pdf" className="size-4 -ml-2" />
    </div>
  );
}
