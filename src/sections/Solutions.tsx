import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, BarChart2, DollarSign, ShoppingCart, Users, Briefcase, PieChart } from 'lucide-react'

export const Solutions = () => {
  const solutions = [
    {
      title: "ERP",
      description: "Sistema integral para gestionar todos los procesos de tu empresa.",
      icon: <Briefcase className="h-8 w-8 mb-4" />,
      features: [
        "Finanzas y Contabilidad",
        "Gestión de Inventarios",
        "Compras y Proveedores",
        "Ventas y Facturación",
        "Recursos Humanos",
        "Producción y Manufactura"
      ]
    },
    {
      title: "CRM",
      description: "Gestiona eficientemente la relación con tus clientes, desde la prospección hasta la fidelización.",
      icon: <Users className="h-8 w-8 mb-4" />,
      features: [
        "Gestión de Contactos y Cuentas",
        "Seguimiento de Oportunidades",
        "Automatización de Marketing",
        "Servicio al Cliente",
        "Análisis de Ventas"
      ]
    },
    {
      title: "BI",
      description: "Toma decisiones informadas con nuestras herramientas de análisis de datos.",
      icon: <BarChart2 className="h-8 w-8 mb-4" />,
      features: [
        "Dashboards Personalizados",
        "Reportes Dinámicos",
        "Análisis Predictivo",
        "Integración con Microsoft Power BI",
        "Visualización de Datos en Tiempo Real"
      ]
    },
    {
        title: "Facturación",
        description: "Toma decisiones informadas con nuestras herramientas de análisis de datos.",
        icon: <BarChart2 className="h-8 w-8 mb-4" />,
        features: [
          "Dashboards Personalizados",
          "Reportes Dinámicos",
          "Análisis Predictivo",
          "Integración con Microsoft Power BI",
          "Visualización de Datos en Tiempo Real"
        ]
      }

  ]

  
  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#11111f] flex flex-col min-h-screen">
        <section className="py-12 md:py-20">
        <div className="section-heading">
          <div className="flex justify-center items-center">
            <div className="tag">Nuestras Soluciones</div>
          </div>
          <h2 className="section-title mt-5">
            Soluciones Integrales para tu negocio
          </h2>
          <p className="section-description mt-5 pb-20">
            Ofrecemos soluciones integrales para optimizar tus procesos de negocio.
          </p>
        </div>
          <div className="container mx-auto px-4">
            <Tabs defaultValue="ERP" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                {solutions.map((solution) => (
                  <TabsTrigger key={solution.title} value={solution.title}>{solution.title}</TabsTrigger>
                ))}
              </TabsList>
              {solutions.map((solution) => (
                <TabsContent key={solution.title} value={solution.title}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl">
                        {solution.icon}
                        <span className="ml-2">{solution.title}</span>
                      </CardTitle>
                      <CardDescription className="text-lg">{solution.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h3 className="text-xl font-semibold mb-4">Características principales:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <ChevronRight className="h-5 w-5 mr-2 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>  
    </div>
  )
}