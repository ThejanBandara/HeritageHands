import AddNewProductForm from '@/components/admin/AddNewProduct'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

const AdminProductsPage = () => {
  return (
    <div className='w-full h-screeen'>
      <div className='w-full px-4 flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>Products</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button className=''>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span>Add new Item</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add new Product</DialogTitle>
              <DialogDescription>

              </DialogDescription>
            </DialogHeader>
            <AddNewProductForm/>
          </DialogContent>
        </Dialog>

      </div>
      <div></div>
    </div>
  )
}

export default AdminProductsPage