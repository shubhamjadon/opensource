//Insertion Sort
#include<stdio.h>

void insertionsort(int arr[],int end){
  int value,k;
  for(int i=1;i<end;i++){
    for(int j=0;j<i;j++){
      if(arr[j]>arr[i]){
        value = arr[i];
        k = i;
        while(k>j){
          arr[k] = arr[k-1];
          k--;
        }
        arr[j] = value;
        break;
      }
    }
  }
}
int main(void) {
  int arr[14] = {45,34,56,11,23,78,54,34,76,2,6,87,43,56};
  printf("Array before sorting:\n");
  for(int i=0;i<14;i++){
    printf("%d ",arr[i]);
  }
  printf("\n");
  insertionsort(arr,14);
  printf("Array after sorting:\n");
  for(int i=0;i<14;i++){
    printf("%d ",arr[i]);
  }
  return 0;
}

//Bubble Sort
#include <stdio.h>

int main(void) {
  int arr[8],i,j,index,temp,size=8,change = 0;
  printf("Enter 8 numbers:");
  for(i=0;i<8;i++){
    scanf("%d",&arr[i]);
  }
  for(j=0;j<8;j++){
      printf("%d ",arr[j]);
    }
    printf("\n");


  for(i=0;i<8;i++){
    for(j=0;j<size;j++){
      if(arr[j]>arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }

    for(j=0;j<8;j++){
      printf("%d ",arr[j]);

    }
    printf("\n");
  }
  return 0;
}

//Merge Sort
#include<stdio.h>
void merge(int a[],int asize,int b[],int bsize,int arr[]){
  int i=0,j=0,k=0;
  while(i<asize && j<bsize){
    if(a[i]<b[j]){
      arr[k] = a[i];
      i++;
      k++;
    }
    else{
      arr[k] = b[j];
      j++;
      k++;
    }
  }
  while(i<asize){
    arr[k]=a[i];
    k++;i++;
  }
  while(j<bsize){
    arr[k]=b[j];
    k++;j++;
  }
}


void breakit(int arr[],int size){
  int a[size/2],b[size-size/2],i;
  //assining values to new arrays
  for(i=0;i<size/2;i++)
    a[i] = arr[i];
  for(i=0;i<size-size/2;i++)
    b[i] = arr[i+size/2];
  //using recursion to break arrays till we get single element array
  if(sizeof(a)/4!=1)
    breakit(a,sizeof(a)/4);
  if(sizeof(b)/4!=1)
    breakit(b,sizeof(b)/4);
  //merging array when we reach stage when a&b are single element arrays
  merge(a,sizeof(a)/4,b,sizeof(b)/4,arr);
}


int main(){
  int arr[10] = {23,45,33,67,54,65,87,98,234,5},i;
  printf("Array before sorting:\n");
  for(int i=0;i<10;i++){
    printf("%d ",arr[i]);
  }
  printf("\n");
  breakit(arr,10);
  printf("Array after sorting:\n");
  for(int i=0;i<10;i++){
    printf("%d ",arr[i]);
  }
  return 0;
}