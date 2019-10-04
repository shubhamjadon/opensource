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