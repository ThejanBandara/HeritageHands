import AddNewProductForm from '@/components/admin/AddNewProduct'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent,  DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const AdminProductsPage = () => {
  return (
    <div className='w-full h-screen overflow-hidden'>
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
            </DialogHeader>
            <AddNewProductForm />
          </DialogContent>
        </Dialog>

      </div>
      <Card className='mx-4 my-2 h-[85vh] '>
        <CardContent>
          <Table>

          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminProductsPage