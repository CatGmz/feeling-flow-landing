import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const KitPurchaseSection = () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [shippingMethod, setShippingMethod] = useState("");

    return (
        <div className="min-h-screen">
            <Navbar />
            <section
                className="py-20 px-4"
                style={{ backgroundColor: '#FEFBF8' }}
            >
                <div className="container mx-auto max-w-6xl">
                    {/* Título de la sección */}
                    <div className="text-center space-y-6 mb-16">
                        <h2
                            className="text-3xl md:text-5xl font-light"
                            style={{ color: "#4B4152" }}
                        >
                            Purchase the{" "}
                            <span className="font-medium" style={{ color: "#8A71AD" }}>
                                Emotional Kit
                            </span>
                        </h2>
                        <p
                            className="text-lg max-w-3xl mx-auto leading-relaxed"
                            style={{ color: "#73697A" }}
                        >
                            Complete your emotional wellness journey with our carefully curated kit. 
                            Each item is designed to support your mental health and emotional well-being.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Columna izquierda - Producto y descripción */}
                        <div className="space-y-8">
                            {/* Imagen principal del kit */}
                            <div className="flex justify-center">
                                <div className="relative">
                                    <div
                                        className="w-96 h-96 rounded-2xl relative overflow-hidden shadow-2xl"
                                        style={{ background: 'linear-gradient(to bottom right, #FFFFFF, #E2B7C9)' }}
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center p-8">
                                            <img
                                                src="./kit-real.svg"
                                                alt="Emotional Capacity Kit"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Descripción del kit */}
                            <div className="space-y-6">
                                <h3
                                    className="text-2xl font-medium"
                                    style={{ color: "#4B4152" }}
                                >
                                    What's included in your kit:
                                </h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {/* Plush */}
                                    <div className="text-center space-y-3">
                                        <div
                                            className="w-20 h-20 rounded-full mx-auto flex items-center justify-center"
                                            style={{ backgroundColor: "#E2B7C9" }}
                                        >
                                            <img
                                                src="./plush.svg"
                                                alt="Plush"
                                                className="w-12 h-12 object-contain"
                                            />
                                        </div>
                                        <p className="text-sm font-medium" style={{ color: "#4B4152" }}>
                                            The Plush
                                        </p>
                                    </div>

                                    {/* Journal */}
                                    <div className="text-center space-y-3">
                                        <div
                                            className="w-20 h-20 rounded-full mx-auto flex items-center justify-center"
                                            style={{ backgroundColor: "#C8B4DC" }}
                                        >
                                            <img
                                                src="./journal.svg"
                                                alt="Journal"
                                                className="w-12 h-12 object-contain"
                                            />
                                        </div>
                                        <p className="text-sm font-medium" style={{ color: "#4B4152" }}>
                                            The Journal
                                        </p>
                                    </div>

                                    {/* Candle */}
                                    <div className="text-center space-y-3">
                                        <div
                                            className="w-20 h-20 rounded-full mx-auto flex items-center justify-center"
                                            style={{ backgroundColor: "#D2AAA4" }}
                                        >
                                            <img
                                                src="./candle.svg"
                                                alt="Candle"
                                                className="w-12 h-12 object-contain"
                                            />
                                        </div>
                                        <p className="text-sm font-medium" style={{ color: "#4B4152" }}>
                                            The Candle
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="leading-relaxed" style={{ color: "#73697A" }}>
                                        This comprehensive kit includes everything you need to begin your emotional wellness journey. 
                                        Each item is handcrafted with care and designed to provide comfort, support, and tools for 
                                        emotional processing and self-care.
                                    </p>
                                    <ul className="space-y-2" style={{ color: "#73697A" }}>
                                        <li className="flex items-center space-x-2">
                                            <span style={{ color: "#8A71AD" }}>✓</span>
                                            <span>Handcrafted plush with natural materials</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <span style={{ color: "#8A71AD" }}>✓</span>
                                            <span>Therapeutic journal for emotional processing</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <span style={{ color: "#8A71AD" }}>✓</span>
                                            <span>Aromatherapy candle with orange and cinnamon</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <span style={{ color: "#8A71AD" }}>✓</span>
                                            <span>Guided instructions for each item</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Columna derecha - Formulario de compra */}
                        <div className="space-y-8">
                            <Card className="border-none shadow-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
                                <CardContent className="p-8">
                                    {/* Precio */}
                                    <div className="text-center space-y-4 mb-8">
                                        <div className="text-4xl font-light" style={{ color: "#4B4152" }}>
                                            $50,000 COP
                                        </div>
                                        <p className="text-sm" style={{ color: "#73697A" }}>
                                            Free shipping on orders over $30,000 COP
                                        </p>
                                    </div>

                                    {/* Información de envío */}
                                    <div className="space-y-6">
                                        <h4 className="text-lg font-medium" style={{ color: "#4B4152" }}>
                                            Shipping Information
                                        </h4>
                                        
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName" style={{ color: "#4B4152" }}>First Name</Label>
                                                <Input
                                                    id="firstName"
                                                    placeholder="John"
                                                    className="rounded-lg"
                                                    style={{
                                                        backgroundColor: "white",
                                                        borderColor: "#D7C9F3",
                                                        color: "#4B4152"
                                                    }}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName" style={{ color: "#4B4152" }}>Last Name</Label>
                                                <Input
                                                    id="lastName"
                                                    placeholder="Doe"
                                                    className="rounded-lg"
                                                    style={{
                                                        backgroundColor: "white",
                                                        borderColor: "#D7C9F3",
                                                        color: "#4B4152"
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email" style={{ color: "#4B4152" }}>Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="john.doe@example.com"
                                                className="rounded-lg"
                                                style={{
                                                    backgroundColor: "white",
                                                    borderColor: "#D7C9F3",
                                                    color: "#4B4152"
                                                }}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone" style={{ color: "#4B4152" }}>Phone</Label>
                                            <Input
                                                id="phone"
                                                placeholder="+57 300 123 4567"
                                                className="rounded-lg"
                                                style={{
                                                    backgroundColor: "white",
                                                    borderColor: "#D7C9F3",
                                                    color: "#4B4152"
                                                }}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="address" style={{ color: "#4B4152" }}>Address</Label>
                                            <Input
                                                id="address"
                                                placeholder="Calle 123 #45-67"
                                                className="rounded-lg"
                                                style={{
                                                    backgroundColor: "white",
                                                    borderColor: "#D7C9F3",
                                                    color: "#4B4152"
                                                }}
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="city" style={{ color: "#4B4152" }}>City</Label>
                                                <Input
                                                    id="city"
                                                    placeholder="Bogotá"
                                                    className="rounded-lg"
                                                    style={{
                                                        backgroundColor: "white",
                                                        borderColor: "#D7C9F3",
                                                        color: "#4B4152"
                                                    }}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="postalCode" style={{ color: "#4B4152" }}>Postal Code</Label>
                                                <Input
                                                    id="postalCode"
                                                    placeholder="110111"
                                                    className="rounded-lg"
                                                    style={{
                                                        backgroundColor: "white",
                                                        borderColor: "#D7C9F3",
                                                        color: "#4B4152"
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Método de envío */}
                                        <div className="space-y-2">
                                            <Label style={{ color: "#4B4152" }}>Shipping Method</Label>
                                            <Select onValueChange={setShippingMethod} value={shippingMethod}>
                                                <SelectTrigger className="rounded-lg SelectTrigger" style={{
                                                    backgroundColor: "#FEFBF8",
                                                    borderColor: "#FEFBF8",
                                                    color: "#4B4152"
                                                }}>
                                                    <SelectValue placeholder="Select shipping method" />
                                                </SelectTrigger>
                                                <SelectContent className="SelectContent" style={{ backgroundColor: "#FEFBF8", borderColor: "#FEFBF8" }}>
                                                    <SelectItem value="standard" className="SelectItem">Standard Shipping (3-5 days) - Free</SelectItem>
                                                    <SelectItem value="express" className="SelectItem">Express Shipping (1-2 days) - $5,000 COP</SelectItem>
                                                    <SelectItem value="premium" className="SelectItem">Premium Shipping (Same day) - $10,000 COP</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {/* Método de pago */}
                                        <div className="space-y-2">
                                            <Label style={{ color: "#4B4152" }}>Payment Method</Label>
                                            <Select onValueChange={setPaymentMethod} value={paymentMethod}>
                                                <SelectTrigger className="rounded-lg SelectTrigger" style={{
                                                    backgroundColor: "#FEFBF8",
                                                    borderColor: "#FEFBF8",
                                                    color: "#4B4152"
                                                }}>
                                                    <SelectValue placeholder="Select payment method" />
                                                </SelectTrigger>
                                                <SelectContent className="SelectContent" style={{ backgroundColor: "#FEFBF8", borderColor: "#FEFBF8" }}>
                                                    <SelectItem value="credit" className="SelectItem">Credit Card</SelectItem>
                                                    <SelectItem value="debit" className="SelectItem">Debit Card</SelectItem>
                                                    <SelectItem value="pse" className="SelectItem">PSE</SelectItem>
                                                    <SelectItem value="nequi" className="SelectItem">Nequi</SelectItem>
                                                    <SelectItem value="daviplata" className="SelectItem">DaviPlata</SelectItem>
                                                    <SelectItem value="transfer" className="SelectItem">Bank Transfer</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {/* Botón de compra */}
                                        <Button
                                            className="w-full py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                                            style={{
                                                backgroundColor: "#8A71AD",
                                                color: "#FFFFFF",
                                            }}
                                        >
                                            Complete Purchase - $50,000 COP
                                        </Button>

                                        <p className="text-xs text-center" style={{ color: "#73697A" }}>
                                            By completing your purchase, you agree to our Terms of Service and Privacy Policy. 
                                            Your payment information is secure and encrypted.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default KitPurchaseSection; 