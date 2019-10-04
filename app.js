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