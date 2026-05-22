export interface OrderData {
  productName: string;
  size: string;
  color: string;
  quantity: number;
  customerName: string;
  address: string;
}

export function generateWhatsAppMessage(order: OrderData): string {
  const message = `Halo Noiseless! Saya ingin memesan:

Produk: ${order.productName}
Size: ${order.size}
Warna: ${order.color}
Jumlah: ${order.quantity}

Nama: ${order.customerName}
Alamat: ${order.address}

Mohon info lebih lanjut. Terima kasih!`;

  return encodeURIComponent(message);
}

export function getWhatsAppLink(order: OrderData, phoneNumber: string = '6281234567890'): string {
  const message = generateWhatsAppMessage(order);
  return `https://wa.me/${phoneNumber}?text=${message}`;
}