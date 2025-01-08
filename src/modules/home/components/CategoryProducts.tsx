import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui"


const CategoryProducts = () => {
  return (
    <Tabs defaultValue="Mobile" className="w-full my-10">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="Mobile">Mobile</TabsTrigger>
        <TabsTrigger value="Laptop">Laptop</TabsTrigger>
        <TabsTrigger value="Watch">Watch</TabsTrigger>
      </TabsList>
      <TabsContent value="Mobile">
        Mobile lsit
      </TabsContent>
      <TabsContent value="Laptop">
        Laptop list
      </TabsContent>
      <TabsContent value="Watch">
        Watch list
      </TabsContent>

    </Tabs>
  )
}

export default CategoryProducts