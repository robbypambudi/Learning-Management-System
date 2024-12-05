import { SidebarLeft } from '@/components/sidebar-left';
import { SidebarRight } from '@/components/sidebar-right';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export function AppSidebar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        {children}
        {/* <div className='flex flex-1 flex-col gap-4 p-4'>
          <div className='mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50' />
          <div className='mx-auto h-[100vh] w-full max-w-3xl rounded-xl bg-muted/50' />
        </div> */}
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  );
}
