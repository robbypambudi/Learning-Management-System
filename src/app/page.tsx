import { AppSidebar } from '@/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';

export default function Page() {
  return (
    <AppSidebar>
      <header className='sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background'>
        <div className='flex flex-1 items-center gap-2 px-3'>
          <SidebarTrigger />
          <Separator orientation='vertical' className='mr-2 h-4' />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className='line-clamp-1'>
                  Dashboard
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
    </AppSidebar>
  );
}
